window.onload=()=>setTimeout(()=>loader.classList.add("hide"),2200);

const loader=document.getElementById("loader");
const reveal=document.querySelectorAll(".reveal");

const obs=new IntersectionObserver(e=>{
e.forEach(x=>x.isIntersecting&&x.target.classList.add("show"))
},{threshold:.18});

reveal.forEach(s=>obs.observe(s));

const hero=document.querySelector(".hero-img");
window.addEventListener("scroll",()=>{
hero.style.transform=`translateY(${scrollY*.18}px)`;
});

const photos=document.querySelectorAll(".photo");
const light=document.getElementById("lightbox");
const big=document.getElementById("big");

photos.forEach(p=>{
p.onclick=()=>{
light.classList.add("show");
big.src=p.src;
};
});

light.onclick=e=>{
if(e.target===light||e.target.id==="close"){
light.classList.remove("show");
}
};

const vinyl=document.getElementById("vinyl");
let taps=0;

vinyl.onclick=()=>{
taps++;
if(taps===5){
document.getElementById("secret").innerText=
"✨ You found the hidden track. See you at the next show.";
taps=0;
}
};

document.addEventListener("visibilitychange",()=>{
vinyl.style.animationPlayState=document.hidden?"paused":"running";
});
