// nav bar elements collapsible
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
});

// language elements collapsible
const languageToggle = document.querySelector(".language-toggle");
const language = document.querySelector(".language-content");

languageToggle.addEventListener("click", function () {
  language.classList.toggle("show-language-content");
});

/*Really inefficient but I'll get to it, still proud that it works :)*/
// all-section collapse
const allToggle = document.querySelector(".language-all")

allToggle.addEventListener("click", function () {
  for (let python of python_list) {
    python.classList.remove("hide-content"); 
  }
  for (let cs of cs_list) {
    cs.classList.remove("hide-content"); 
  }
});

// section-python collapse
const pythonToggle = document.querySelector(".python-toggle");
const python_list = document.querySelectorAll(".section-python");

pythonToggle.addEventListener("click", function () {
  console.log("python enabled");
  for (let python of python_list) {
    python.classList.remove("hide-content"); 
  }
  for (let cs of cs_list) {
    cs.classList.add("hide-content"); 
  }
});

// section-cs collapse
const csToggle = document.querySelector(".cs-toggle");
const cs_list = document.querySelectorAll(".section-cs");

csToggle.addEventListener("click", function () {
  console.log("cs enabled");
  for (let cs of cs_list) {
    cs.classList.remove("hide-content"); 
  }
  for (let python of python_list) {
    python.classList.add("hide-content"); 
  }
});