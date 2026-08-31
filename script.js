
const reveals=document.querySelectorAll('.reveal');

const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('visible');
}
});
},{threshold:0.18});

reveals.forEach(section=>observer.observe(section));

const nav=document.querySelector('.navbar');

window.addEventListener('scroll',()=>{

if(window.scrollY>60){
nav.style.background='rgba(8,17,31,.82)';
}else{
nav.style.background='rgba(8,17,31,.55)';
}

const hero=document.querySelector('.hero-image');
hero.style.transform=`translateY(${window.scrollY*0.18}px)`;

});

const images=document.querySelectorAll('.gallery-item');
const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightbox-img');
const closeBtn=document.querySelector('.close');

images.forEach(img=>{
img.addEventListener('click',()=>{
lightbox.classList.add('show');
lightboxImg.src=img.src;
});
});

closeBtn.addEventListener('click',()=>{
lightbox.classList.remove('show');
});

lightbox.addEventListener('click',(e)=>{
if(e.target===lightbox){
lightbox.classList.remove('show');
}
});
```
