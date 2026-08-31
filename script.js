// ========= MXLVIN V1.2 =========

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{

    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }

  });
},{
  threshold:0.18
});

reveals.forEach(section=>{
  observer.observe(section);
});

// Navbar blur while scrolling

const nav = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{

  if(window.scrollY > 60){
    nav.style.background = 'rgba(8,17,31,.82)';
  }else{
    nav.style.background = 'rgba(8,17,31,.55)';
  }

});

// Hero parallax

const hero = document.querySelector('.hero-image');

window.addEventListener('scroll',()=>{

  const offset = window.scrollY;

  hero.style.transform = `translateY(${offset * 0.18}px)`;

});
