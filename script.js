const c=document.getElementById("clock"),g=document.querySelector(".glow"),m=document.getElementById("msg");function tick(){let d=new Date();c.textContent=[d.getHours(),d.getMinutes(),d.getSeconds()].map(x=>String(x).padStart(2,"0")).join(":")}tick();setInterval(tick,1000);addEventListener("pointermove",e=>{g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});document.querySelectorAll("audio").forEach(a=>{a.addEventListener("play",()=>{document.querySelectorAll("audio").forEach(b=>{if(b!==a)b.pause()});m.textContent="PREVIEW SIGNAL // ACTIVE_"});a.addEventListener("pause",()=>{if(![...document.querySelectorAll("audio")].some(x=>!x.paused))m.textContent="END OF TRANSMISSION_"})});
// Controlled signal corruption: brief, rare page-wide interference.
const root=document.documentElement;
function signalHit(){
  if(document.hidden)return;
  root.classList.add('signal-hit');
  setTimeout(()=>root.classList.remove('signal-hit'),120+Math.random()*180);
  setTimeout(signalHit,7000+Math.random()*11000);
}
setTimeout(signalHit,5000+Math.random()*6000);

// Make the cursor glow feel like a scanning instrument, not a constant spotlight.
addEventListener('pointermove',e=>{
  const intensity=0.05+Math.min(e.movementX*e.movementX+e.movementY*e.movementY,900)/900*0.07;
  g.style.opacity=String(intensity);
});
