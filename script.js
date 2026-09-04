const audio=document.getElementById('voidAudio');
const play=document.querySelector('.play');
const seek=document.getElementById('seek');
const time=document.getElementById('time');
const mute=document.querySelector('.mute');
function fmt(s){s=Math.max(0,Math.floor(s||0));return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`}
function update(){if(!audio)return;seek.value=Math.min(audio.currentTime||0,30);time.textContent=`${fmt(Math.min(audio.currentTime||0,30))} / 0:30`}
play?.addEventListener('click',()=>{if(audio.paused){audio.play();play.textContent='Ⅱ'}else{audio.pause();play.textContent='▶'}});
audio?.addEventListener('timeupdate',()=>{if(audio.currentTime>=30){audio.pause();audio.currentTime=0;play.textContent='▶'}update()});
seek?.addEventListener('input',()=>{audio.currentTime=Number(seek.value)});
mute?.addEventListener('click',()=>{audio.muted=!audio.muted;mute.textContent=audio.muted?'×':'◖'});
