const messages = [
"Nope, not an option!",
"Try again!",
"You sure about that?",
"Not happening!",
"Think again!"
];

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
let msgIndex = 0;

/* Move No button */
function moveNoButton(){
  const yesRect = yesBtn.getBoundingClientRect();
  let newX,newY;

  do{
    newX = Math.random()*(window.innerWidth-100);
    newY = Math.random()*(window.innerHeight-50);
  }while(
    newX < yesRect.right &&
    newX+100 > yesRect.left &&
    newY < yesRect.bottom &&
    newY+50 > yesRect.top
  );

  noBtn.style.position="fixed";
  noBtn.style.left=newX+"px";
  noBtn.style.top=newY+"px";
  noBtn.textContent = messages[msgIndex];
  msgIndex = (msgIndex+1)%messages.length;
}

noBtn.addEventListener("click",moveNoButton);
noBtn.addEventListener("touchstart",moveNoButton);

/* Floating Hearts */
let hearts=[];
function createHeart(){
  const heart=document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML="💖";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(Math.random()*20+15)+"px";
  heart.style.animationDuration=(Math.random()*5+5)+"s";
  document.body.appendChild(heart);
  hearts.push(heart);
}
for(let i=0;i<15;i++) createHeart();

/* YES CLICK */
yesBtn.addEventListener("click",()=>{
  document.getElementById("mainContent").style.display="none";
  hearts.forEach(h=>h.remove());

  const celebration=document.createElement("div");
  celebration.classList.add("celebration");

  celebration.innerHTML=`
    <div class="pulse">Yayyyy! 💖</div>
    <div class="spin">😍</div>
    <h2>I knew you'd say yes...</h2>
  `;

  document.body.appendChild(celebration);

  /* Confetti */
  for(let i=0;i<120;i++){
    const conf=document.createElement("div");
    conf.classList.add("confetti");
    conf.style.left=Math.random()*100+"vw";
    conf.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`;
    conf.style.animationDuration=(Math.random()*3+2)+"s";
    document.body.appendChild(conf);
  }
});
