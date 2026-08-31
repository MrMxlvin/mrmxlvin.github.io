// HOUSE OF MXLVIN V2.5

const loader=document.getElementById("loader");

window.addEventListener("load",()=>{
setTimeout(()=>{
loader.classList.add("hide");
},900);
});

// PARALLAX

const hero=document.querySelector(".hero-image");

window.addEventListener("scroll",()=>{
hero.style.transform=`translateY(${window.scrollY*0.18}px)`;
});

// REVEAL

const sections=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:.18});

sections.forEach(section=>observer.observe(section));

// GALLERY

const photos=document.querySelectorAll(".photo");
const lightbox=document.getElementById("lightbox");
const big=document.getElementById("lightbox-image");
const close=document.getElementById("close");

photos.forEach(photo=>{
photo.addEventListener("click",()=>{
big.src=photo.src;
lightbox.classList.add("show");
});
});

close.onclick=()=>lightbox.classList.remove("show");

lightbox.onclick=(e)=>{
if(e.target===lightbox){
lightbox.classList.remove("show");
}
};

// VINYL

const vinyl=document.getElementById("vinyl");
const status=document.getElementById("status");

let playing=true;

vinyl.addEventListener("click",()=>{

playing=!playing;

if(playing){
vinyl.style.animationPlayState="running";
status.textContent="Music spinning";
}else{
vinyl.style.animationPlayState="paused";
status.textContent="Record paused";
}

});

// Pause when tab hidden

document.addEventListener("visibilitychange",()=>{

vinyl.style.animationPlayState=document.hidden?"paused":(playing?"running":"paused");

});
