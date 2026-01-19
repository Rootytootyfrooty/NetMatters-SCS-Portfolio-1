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
    console.log(event);
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
const firstName = document.getElementById("ffname");
const lastName = document.getElementById("flname");
const email = document.getElementById("femail");
const subject = document.getElementById("fsubject");
const message = document.getElementById("fmessage");

form.addEventListener("submit", event => {
  event.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innertext = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  if(firstNameValue === "") {
    setError(firstName, "First name is required");
  } else {
    setSuccess(firstName);
  }
  if(emailValue === "") {
    setError(email, "E-mail is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Please provide a valid email address");
  } else {
    setSuccess(email);
  }
  if(subjectValue === "") {
    setError(subject, "Subject is required");
  } else {
    setSuccess(subject);
  }
  if(messageValue === "") {
    setError(message, "Message is required");
  } else if (messageValue.length > 1000) {
    setError(message, "Message limit: 1,000 characters")
  } else {
    setSuccess(message);
  }
};