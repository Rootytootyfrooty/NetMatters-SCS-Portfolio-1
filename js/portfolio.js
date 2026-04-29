//burger button functionality - new/experiment
const burgerBtn = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const burgerStyle = document.getElementById("mid")

burgerBtn.addEventListener("click", (event) => {
  if ( sidebar.classList.contains("default") ){
    sidebar.classList.add("sidebar-open");
    sidebar.classList.remove("default");
    burgerStyle.classList.add("burger-clicked");
    burgerStyle.classList.remove("mid");
  } else {
    sidebar.classList.add("default");
    sidebar.classList.remove("sidebar-open");
    burgerStyle.classList.add("mid");
    burgerStyle.classList.remove("burger-clicked");
  }
});

//makes the view project text disappear when hovering over the .hover-split H3s in the portfolio section
const viewProject = document.querySelector(".view-project");
const hoverSplitH3 = document.querySelectorAll(".hover-split");

const project = document.getElementsByClassName("view-project");
const splitH3 = document.getElementsByClassName("hover-split")

for ( let i = 0; i < project.length; i++ ) {
  splitH3[i].addEventListener("mouseenter", () => {
  project[i].style.display = "none";
  });
  splitH3[i].addEventListener("mouseleave", () => {
  project[i].style.removeProperty("display");
  });
}


