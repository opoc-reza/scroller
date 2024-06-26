let scroller = document.querySelector("#scroller");
let menu = document.querySelector(".menu");
let sperator = document.querySelector('.sperator')
let specs = document.querySelectorAll('.spec')
window.addEventListener("scroll", () => {
  scrollBar();
  hideMenu();
  numberStart()
});

let checkForFirst = false

function numberStart () {
  let scrollTop = document.documentElement.scrollTop
  if (scrollTop > sperator.offsetTop - 500) {
    if (!checkForFirst) {
      for (let item of specs) {
        let goalItem = item.dataset.goal
        let timer = setInterval(() => {
          if (item.innerHTML == goalItem) {
            clearInterval(timer)
            
          }
          item.innerHTML++
        }, 1)
      }
      checkForFirst = true
    }

  }
}

let counter;
function hideMenu() {
    let scrollTop = document.documentElement.scrollTop;
    if (counter < scrollTop) {
        menu.classList.add('handler') 
    }else {
        menu.classList.remove('handler')
    }
    counter = scrollTop
}

let red, green, blue, color;
function scrollBar() {
  let bodyHeight = document.body.clientHeight;
  let windowInnerHeight = window.innerHeight;
  let scrollTop = document.documentElement.scrollTop;
  let hey = bodyHeight - windowInnerHeight;
  let result = (scrollTop / hey) * 100;
  scroller.style.width = result + "%";
}

setInterval(() => {
  red = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);
  color = `rgb(${red}, ${green}, ${blue})`;
  scroller.style.backgroundColor = color;
}, 100);
