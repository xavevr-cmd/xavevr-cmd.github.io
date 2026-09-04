(() => {
const title=document.querySelector('.hero-title'), logo=document.querySelector('.logo');
setInterval(()=>{if(title&&Math.random()<.18){title.style.transform=`translate(${Math.random()*3-1.5}px,${Math.random()*2-1}px)`;setTimeout(()=>title.style.transform='',80)}},1200);
setInterval(()=>{if(logo&&Math.random()<.12){logo.style.textShadow=`${Math.random()*5-2}px 0 #fff`;setTimeout(()=>logo.style.textShadow='',90)}},1800);
})();