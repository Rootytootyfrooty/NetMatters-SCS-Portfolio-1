// import styles from "../scss/abstracts/_variables.scss"


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


// burger button functionality
const burgerBtn = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const introText = document.getElementById("introtext");
const scrollText = document.getElementById("scroll");
const body = document.getElementById("top");

burgerBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebar.style.display = "flex";
    introText.style.paddingLeft = "225px";
    body.classList.add("burger-clicked");
    body.classList.remove("default");
    if ( window.innerWidth <= 767 ) {
        introText.style.display = "none";
        scrollText.style.display = "none";
    }
});
sidebar.addEventListener("click", (event) => {
    event.stopPropagation();
});
body.addEventListener("click", (event) => {
    if (!body.classList.contains("burger-clicked")) return;
    body.classList.add("default");
    body.classList.remove("burger-clicked");
    sidebar.style.display = "none";
    introText.style.paddingLeft = "0";
    introText.style.display = "flex";
    scrollText.style.display = "flex";
    scrollText.style.paddingLeft = "0";
    if ( window.innerWidth > 767 ) {
        sidebar.style.display = "flex";
    }
});
window.addEventListener("resize", function(event) {
    if ( window.innerWidth > 767 ) {
            sidebar.style.display = "flex";
        }
    if ( window.innerWidth <= 767 ) {
        sidebar.style.display = "none";
    }
});

//contact form validation
const form = document.getElementById("form");
const firstNameIn = document.getElementById("ffname");
const firstNameCo = document.getElementById("first-name");
const lastNameIn = document.getElementById("flname");
const lastNameCo = document.getElementById("last-name");
const emailIn = document.getElementById("femail");
const emailCo = document.getElementById("email");
const subjectIn = document.getElementById("fsubject");
const subjectCo = document.getElementById("subject");
const formMessageIn = document.getElementById("fmessage");
const formMessageCo = document.getElementById("message");

form.addEventListener("submit", event => {
  event.preventDefault();
  validateInputs();
});
// error function when user input is invalid
const setError = (field, message) => {
  const control = field.closest(".input-control");
  if (!control) return;

  field.placeholder = message;

  if (!field.hasAttribute("data-no-clear")) {
    field.value = "";
  }

  control.classList.add("error");
  control.classList.remove("success");
};
//success function
const setSuccess = (field) => {
  const control = field.closest(".input-control");
  if (!control) return;

  field.placeholder = field.dataset.placeholder;
  control.classList.add("success");
  control.classList.remove("error");
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
  const firstNameValue = firstNameIn.value.trim();
  const lastNameValue = lastNameIn.value.trim();
  const emailValue = emailIn.value.trim();
  const subjectValue = subjectIn.value.trim();
  const formMessageValue = formMessageIn.value.trim();

  if(firstNameValue === "") {
    setError(firstNameIn, "First name is required");
  } else {
    setSuccess(firstNameIn);
  }
  if(lastNameValue === "") {
    setError(lastNameIn, "Last name is required");
  } else {
    setSuccess(lastNameIn);
  }
  if(emailValue === "") {
    setError(emailIn, "E-mail is required");
  } else if (!isValidEmail(emailValue)) {
    setError(emailIn, "Please provide a valid email address");
  } else if (emailValue === "kathryn.root@netmatters-scs.com") {
    setError(emailIn, "You're meant to use your own email");
  } else {
    setSuccess(emailIn);
  }
  if(subjectValue === "") {
    setError(subjectIn, "Subject is required");
  } else {
    setSuccess(subjectIn);
  }
  if(formMessageValue === "") {
    setError(formMessageIn, "Message is required");
  } else if (formMessageValue.length > 1000) {
    setError(formMessageIn, "Message limit: 1,000 characters")
  } else {
    setSuccess(formMessageIn);
  }
};

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

// hoverSplitH3.forEach(h3 => {
//   h3.addEventListener("mouseenter", () => {
//     viewProject.style.display = "none";
//     console.log("hello");
//   });

// });

// hoverSplitH3.forEach(h3 => {
//   h3.addEventListener("mouseleave", () => {
//     viewProject.style.removeProperty("display");
//   });

// });
