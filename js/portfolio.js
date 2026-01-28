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

// burger button functionality - old
// const burgerBtn = document.getElementById("burger");
// const sidebar = document.getElementById("sidebar");
// const introText = document.getElementById("introtext");
// const scrollText = document.getElementById("scroll");
// const body = document.getElementById("top");

// burgerBtn.addEventListener("click", (event) => {
//     event.stopPropagation();
//     sidebar.style.display = "flex";
//     introText.style.paddingLeft = "225px";
//     body.classList.add("burger-clicked");
//     body.classList.remove("default");
//     if ( window.innerWidth <= 767 ) {
//         introText.style.display = "none";
//         scrollText.style.display = "none";
//     }
// });
// sidebar.addEventListener("click", (event) => {
//     event.stopPropagation();
// });
// body.addEventListener("click", (event) => {
//     if (!body.classList.contains("burger-clicked")) return;
//     body.classList.add("default");
//     body.classList.remove("burger-clicked");
//     sidebar.style.display = "none";
//     introText.style.paddingLeft = "0";
//     introText.style.display = "flex";
//     scrollText.style.display = "flex";
//     scrollText.style.paddingLeft = "0";
//     if ( window.innerWidth > 767 ) {
//         sidebar.style.display = "flex";
//     }
// });
// window.addEventListener("resize", function(event) {
//     if ( window.innerWidth > 767 ) {
//             sidebar.style.display = "flex";
//         }
//     if ( window.innerWidth <= 767 ) {
//         sidebar.style.display = "none";
//     }
// });

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
  event.preventDefault();
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

//change classes for animating .container-default divs sliding in on scroll
// they transition as they enter the viewport regardless of scroll position



const slideSection = document.querySelectorAll("section");
const slideInner = document.querySelector(".container-default");
const slideInners = Array.from(
  document.querySelectorAll(".container-default")
);

  // const observer = new IntersectionObserver(
  //   (entries, observer) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("is-visible");
  //         entry.target.classList.remove("container-default");
  //         observer.unobserve(entry.target);
  //       } 
  //     });
  //   },
  //   {
  //     root: null,
  //     threshold: 0.03,
  //     rootMargin: "0px 0px -50px 0px"
  //   }
  // );

  // slideInner.forEach(el => observer.observe(el));

// this is for the .container-default divs sliding in on scroll but tied to scroll position, also works in reverse.
// not very smooth, though, if you're using a scroll wheel.

const startScroll = slideInner.offsetTop - window.innerHeight;
const endScroll = startScroll + 500;


function scrollStop(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

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
window.addEventListener("scroll", onScroll);
window.addEventListener("load", () => {
  slideInners.forEach(updateElement);
});

//coding examples hover explanation

// const attrName = document.querySelectorAll(".token");
// const definitions = document.getElementById("definitions");

// console.log(attrName);
// const hljsTag = document.getElementsByClassName("hljs-tag");
// const hljsName = (document.getElementsByClassName("hljs-name"));
// const hljsAttr = document.getElementsByClassName("hljs-attr");
// const hljsString = document.getElementsByClassName("hljs-string");

// console.log(hljsName[0]);
// console.log(hljsName);
// attrName.addEventListener("mouseenter", () => {
//   console.log("hovered");
//   if (attrName.textContent == "class") {
//     definitions.textContent = "explanation";
//     console.log("correct hover");
//   } else {
//     console.log("Oopsie");
//   }
// });

const definitions = document.getElementsByClassName("definitions");
const codeContainer = document.getElementsByClassName("code-cont");
const def1 = definitions[0];
const def2 = definitions[1];
const def3 = definitions[2];

function goHoverDefinitions(codeElement) {
  // const properties = codeElement.getElementsByClassName("property");
  // const prismTag = codeElement.getElementsByClassName("tag");
  const tokens = codeElement.getElementsByClassName("token");
  


  for (const token of tokens) {
    token.addEventListener("mouseenter", (e) => {

      if ( e.target.classList.contains("attr-name") ) {
        if ( e.target.textContent === "class" ){
          def1.textContent = "A class attribute";
        } else if ( e.target.textContent === "href" ) {
          def1.textContent = "An href attribute";
        }

      } else if ( e.target.classList.contains("attr-value") ) {
      def1.textContent = "The value or name of the attribute that I set";
      }
    });
    token.addEventListener("mouseleave", (e) => {
      def1.textContent = "Hover over the code to learn more";
    });
  }
}
// function goHoverDefintions(codeEl) {
//   const definition = codeEl
//     .closest(".code-cont")
//     .querySelector(".defintions");

//   codeEl.addEventListener("mouseenter", (e) => {
//     const target = e.target;

//     if (!target.className.startsWith("token")) return;

//     if (target.classList.contains("property")) {
//       definition.textContent = "Tag name";
//     } else if (target.classList.contains("hljs-attr")){
//       definition.textContent = "a property name";
//       console.log("codeeeee23");
//     } 


//   });

//   codeEl.addEventListener("mouseout", () => {
//     definition.textContent = "Hover over the code to learn more"
//   });
//   console.log(definition);

// }

// hljs.addPlugin({
//   "after:highlightElement": ({ el }) => {
//     goHoverDefinitions(el);
//   }
// });
// hljs.highlightAll();
Prism.hooks.add("complete", function (env) {
  goHoverDefinitions(env.element);
});
