// this is for the .container-default divs sliding in on scroll but tied to scroll position, also works in reverse.
// not very smooth, though, if you're using a scroll wheel.

//change classes for animating .container-default divs sliding in on scroll
// they transition as they enter the viewport regardless of scroll position


const slideSection = document.querySelectorAll("section");
const slideInner = document.querySelector(".container-default");
const slideInners = Array.from(
  document.querySelectorAll(".container-default")
);

const startScroll = slideInner.offsetTop - window.innerHeight;
const endScroll = startScroll + 500;

// so the scroll position is always between 0 and 1 so percentages are easy
function scrollStop(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
// updates progress based on scrollY position from top of section (-window height)
function updateElement(el) {
  const rect = el.getBoundingClientRect();
  const scrollY = window.scrollY;
  const start = 
    scrollY + rect.top - window.innerHeight;
  const end = start + 600;
  const progress = scrollStop (
    (scrollY - start) / (end - start),
    0,
    1
  );
  const marginLeft = -100 + progress * 100;
  el.style.marginLeft = `${marginLeft}%`;
}

let ticking = false;
function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      slideInners.forEach(updateElement);
      ticking = false;
    });
    ticking = true;
  }
}
//triggers update every time a scroll event happens
window.addEventListener("scroll", onScroll);
window.addEventListener("load", () => {
  slideInners.forEach(updateElement);
});
