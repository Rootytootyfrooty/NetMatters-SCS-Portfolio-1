//contact form validation. in = user input, co = control
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
  //event.preventDefault();
  validateInputs();
});

// live error when typing email
const liveError = (field) => {
  const control = field.closest(".input-control");
  control.classList.add("error");
  control.classList.remove("success");
};
// live success when typing email
const liveSuccess = (field) => {
  const control = field.closest(".input-control");
  control.classList.add("success");
  control.classList.remove("error");
};
// error function when user input is invalid (after pressing submit)
const setError = (field, message) => {
  const control = field.closest(".input-control");
  if (!control) return;

  field.placeholder = message;
  // I have data no clear on the message box so if it's over 1,000 chars it won't reset when error
  if (!field.hasAttribute("data-no-clear") && field.type !== "email") {
    field.value = "";
  }

  control.classList.add("error");
  control.classList.remove("success");
};
// success function (after pressing submit)
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

const emailValue = emailIn.value.trim();
//trim the data so I don't have to deal with trailing spaces
const validateInputs = () => {
  const firstNameValue = firstNameIn.value.trim();
  const lastNameValue = lastNameIn.value.trim();
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
  if(emailIn.value === "") {
    setError(emailIn, "E-mail is required");
  } else if (!isValidEmail(emailIn.value.trim())) {
    setError(emailIn, "Please provide a valid email address");
  } else if (emailIn.value.trim() === "kathryn.root@netmatters-scs.com") {
    setError(emailIn, "You're meant to use your own email"); //I just thought this was funny
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
//live email checking function
emailCo.addEventListener("input", event => {
  const value = event.target.value;

  if (!isValidEmail(value)) {
      liveError(event.target);
    } else {
      liveSuccess(event.target);
    }
});
//live form message character limit function
formMessageCo.addEventListener("input", event => {
  const value = event.target.value.length;

  if ( value >= 1000 ) {
    liveError(event.target);
  } else {
    liveSuccess(event.target);
  }
});
// success live character limit function for names & subject
const textBox = document.getElementsByClassName("char-lim");

for ( let i = 0; i < textBox.length; i++ ) {
  textBox[i].addEventListener("input", () => {
    if ( textBox[i].value.length < 50 && textBox[i].value.length > 0 ) {
      textBox[i].closest(".input-control").classList.remove("error");
      textBox[i].closest(".input-control").classList.add("success");
    } else {
      textBox[i].closest(".input-control").classList.remove("success");
      textBox[i].closest(".input-control").classList.add("error");
    }
  });

}