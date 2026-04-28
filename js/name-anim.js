//name animation backsplash #introtext
document.addEventListener("DOMContentLoaded", () => {
  const txtElement = document.querySelector(".anim-name");
  const textContent = txtElement.textContent;

  const animateText = () => {
    txtElement.textContent = "";
    
    textContent.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${index * 0.1}s`;
      span.style.display = char === " " ? "inline-block" : "inline";
      txtElement.appendChild(span);
    });
  };

  animateText();

  txtElement.addEventListener("click", () => {
    animateText();
  });
});