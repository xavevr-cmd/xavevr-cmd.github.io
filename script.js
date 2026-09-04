const audio=document.getElementById("voidAudio");
const play=document.querySelector(".play");
const seek=document.getElementById("seek");
const time=document.getElementById("time");
const volume=document.querySelector(".volume");
const card=document.querySelector(".void-card");

function fmt(s){s=Math.max(0,Math.floor(s||0));return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`}
function update(){if(!audio)return;const d=Math.min(audio.duration||30,30);const t=Math.min(audio.currentTime||0,30);seek.value=t;time.textContent=`${fmt(t)} / 0:30`}
play?.addEventListener("click",()=>{if(audio.paused){audio.play();play.textContent="Ⅱ"}else{audio.pause();play.textContent="▶"}});
audio?.addEventListener("timeupdate",()=>{if(audio.currentTime>=30){audio.pause();audio.currentTime=0;play.textContent="▶"}update()});
audio?.addEventListener("loadedmetadata",update);
seek?.addEventListener("input",()=>{audio.currentTime=Number(seek.value)});
volume?.addEventListener("click",()=>{audio.muted=!audio.muted;volume.textContent=audio.muted?"×":"◖"});
card?.addEventListener("mouseleave",()=>{if(audio&&!audio.paused){audio.pause();play.textContent="▶"}});
