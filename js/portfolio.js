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


//coding examples hover explanation
// hovering over certain elements to change the "hover to learn more" text with explanations/defintions

const definitions = document.getElementsByClassName("definitions");
const codeCont1 = document.getElementById("code-cont-1");
const codeCont2 = document.getElementById("code-cont-2");
const codeCont3 = document.getElementById("code-cont-3");

const def1 = definitions[0];
const def2 = definitions[1];
const def3 = definitions[2];

// I have to make it a function that runs after the prism.js file has done its thing
//this whole thing is very messy but it works so I'm leaving it for now...
// now works on touchscreen!
function goHoverDefinitions(codeElement, defElement) {
  //prism.js adds spans with different classes depending on the element/tag/punctuation
  //and every one has the class 'token' first
  const tokens = codeElement.getElementsByClassName("token");
  
  //for touchscreen
  let leaveTimer = null;
  let activeToken = null;
  function handleEnter(token, text) {
    clearTimeout(leaveTimer);

      if (activeToken && activeToken !== token) {
        activeToken.classList.remove("token-hl");
      }

      token.classList.add("token-hl");
      activeToken = token;
      defElement.textContent = text;
    }
    function scheduleDeactivate(token) {
      leaveTimer = setTimeout(() => {
        if (activeToken === token) {
          token.classList.remove("token-hl");
          activeToken = null;
          defElement.textContent = "Hover or tap on code to learn more";
        }
      }, 5000);
    }

    for (const token of tokens) {
      token.addEventListener("mouseenter", () => {
        handleToken(token);
      });
      token.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        handleToken(token);
        scheduleDeactivate(token);
      });
      token.addEventListener("mouseleave", () => {
        scheduleDeactivate(token);
      });
    }
    //click anywhere else on the page and it removes the highlight/defintions of the previous selection (or wait 5000ms)
    document.addEventListener("pointerdown", (e) => {
      if (activeToken && !activeToken.contains(e.target)) {
        activeToken.classList.remove("token-hl");
        activeToken = null;
        clearTimeout(leaveTimer);
        def1.textContent = "Hover or tap on code to learn more";
        def2.textContent = "Hover or tap on code to learn more";
        def3.textContent = "Hover or tap on code to learn more";
      }
    });
      // very janky if statements, I'm sure this could be improved.
      // prism.js results in not as specific names as I would like
      // e.g. div and span are both in spans with the classes "token tag".
      // so I have to differentiate using their textContent
      function handleToken(token) {
    if (token.classList.contains("attr-name")) {
      if (token.textContent === "class") {
        handleEnter(token, "An attribute used to assign reusable identifiers to elements");
      } else if (token.textContent === "href") {
        handleEnter(token, "An attribute used to point to a specific URL");
      }
    } else if (token.classList.contains("attr-value")) {
      handleEnter(token, "The value or name of the attribute that I set");
    } else if (token.classList.contains("tag")) {
      if (token.textContent.startsWith("<span") || token.textContent.startsWith("</span")) {
        handleEnter(token, "An inline container used to wrap pieces of text and content");
      } else if (token.textContent.startsWith("<div") || token.textContent.startsWith("</div")) {
        handleEnter(token, "A generic block-level container used to group elements");
      }
    } else if (token.classList.contains("variable")) {
      if (token.closest("code-cont-2")) {
        handleEnter(token, "The variable name for the sass map");
      } else {
        handleEnter(token, "A named variable that stores a reusable value, defined elsewhere");
      }
    } else if (token.classList.contains("property")) {
      if (token.closest("#code-cont-2")) {
        if (token.textContent.includes("e")) {
          handleEnter(token, "The key part of the key value pairs");
        } else {
          handleEnter(token, "The variable name for the sass map");
        }
      } else {
        handleEnter(token, "The property that is being styled");
      }
    } else if (token.classList.contains("selector")) {
      handleEnter(token, "The selector used to target the correct elements");
    } else if (token.classList.contains("keyword")) {
      handleEnter(token, "The @each rule which cycles through each value pair in the sass map");
    }
  }
}

// run the hover-for-the-definitions function after prism.js has injected the markup that makes the syntax highlighter work
// or I can't target the span classes that don't exist yet
Prism.hooks.add("complete", function (env) {
  goHoverDefinitions(codeCont1, def1);
  goHoverDefinitions(codeCont2, def2);
  goHoverDefinitions(codeCont3, def3);
});

