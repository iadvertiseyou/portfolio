if ("serviceWorker" in navigator) {
  this.navigator.serviceWorker
    .register("/portfolio/sw.js")
    .then(function(registration) {
      console.log(`Registration successful. Scope: ${registration.scope}`);
    })
    .catch(function(e) {
      console.log(`Service Worker registration failed. Error: ${e}`);
    });
}

const header = document.querySelector(".header");
const sectionContent = document.querySelectorAll(".section-content");
const init = function() {
  // set header transparent
  header.classList.add("transparent");
  // Hide sections
  sectionContent.forEach(section => {
    section.classList.add("hidden");
  });
};

function inView(elem) {
  let elemOffset = elem.getBoundingClientRect().top;
  if (elemOffset - window.innerHeight < -300) {
    return true;
  } else {
    return false;
  }
}
function blendEvent() {
  sectionContent.forEach(section => {
    if (inView(section)) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  });
}

document.addEventListener("scroll", throttle(blendEvent, 100));

function throttle(f, wait) {
  let time = Date.now();
  return function() {
    let expiredIn = time + wait - Date.now();
    if (expiredIn < 0) {
      f();
      time = Date.now();
    }
  };
}
let currOffsetY = window.pageYOffset;
document.addEventListener("scroll", function() {
  let newOffsetY = window.pageYOffset;
  if (newOffsetY >= 200) {
    header.style.top = "-64px";
  } else {
    header.style.top = "23px";
  }
  currOffsetY = newOffsetY;
});

init();
