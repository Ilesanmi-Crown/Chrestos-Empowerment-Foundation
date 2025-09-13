const hambuger = document.querySelector('.hambuger');
const navMenu = document.querySelector('.nav-menu');

hambuger.addEventListener('click', () => {
    hambuger.classList.toggle('active');
    navMenu.classList.toggle('active');
})


document.querySelectorAll('.nav-menu').forEach(n => n.addEventListener('click', () => {
  hambuger.classList.remove('active');
  navMenu.classList.remove('active');
}))


const highlights = document.querySelector(".highlights");

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end){
        clearInterval(timer);

      }
    },step);
  }
  counter("count1", 0, 200, 4000)
  counter("count2", 0, 80, 2500)
  counter("count3", 0, 100, 3000)
})


const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", checkbox());

checkbox();

function checkbox() {
  const triggerbottom = window.innerHeight / 5 * 4;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerbottom) {
      section.classList.add("show-section");
    }else {
      section.classList.remove("show-section");
    }
  })
}

console.log(sections);


{
  const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;
  

  window.addEventListener("scroll", () => {
    
    if(lastScrollY == 0){
      nav.classList.add("top")
    }else{
      nav.classList.remove("top")
    }
    lastScrollY = window.scrollY
    
    
    if (lastScrollY < window.scrollY){
      nav.classList.add("nav--hidden")
    }else{
      nav.classList.remove("nav--hidden")
    }
    lastScrollY = window.scrollY


  });
}