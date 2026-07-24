function renderMusicPlayer(){

return`

<div id="musicPlayer" class="music-player">

<audio
id="globalAudio"
preload="auto"
loop>

<source
src="assets/music/instrumental-happy-birthday.mp3"
type="audio/mpeg">

</audio>

<div class="music-vinyl">

<img
class="music-cover"
src="assets/images/album/vinly.png"
alt="Album Cover">

<div id="vinyl" class="vinyl"></div>

</div>

<div class="music-controls">

<button id="prevSong">⏮</button>

<button id="playPause">▶</button>

<button id="nextSong">⏭</button>

</div>

<input
id="musicProgress"
type="range"
value="0"
min="0"
max="100">

<div class="music-time">

<span id="currentTime">0:00</span>

<span id="duration">0:00</span>

</div>

</div>

`;

}

function initializeMusicPlayer(){

const audio=document.getElementById("globalAudio");
const play=document.getElementById("playPause");
const vinyl=document.querySelector(".music-vinyl");
const progress=document.getElementById("musicProgress");
const current=document.getElementById("currentTime");
const duration=document.getElementById("duration");

function format(time){

const m=Math.floor(time/60);
const s=Math.floor(time%60);

return`${m}:${String(s).padStart(2,"0")}`;

}

function startMusic(){

    audio.play().catch(()=>{});

    document.removeEventListener("pointerdown", startMusic);
    document.removeEventListener("keydown", startMusic);

}

document.addEventListener("pointerdown", startMusic, { once: true });
document.addEventListener("keydown", startMusic, { once: true });

play.onclick=()=>{

if(audio.paused){

audio.play();

}else{

audio.pause();

}

};

audio.onplay=()=>{

play.textContent="⏸";

vinyl.classList.add("playing");

};

audio.onpause=()=>{

play.textContent="▶";

vinyl.classList.remove("playing");

};

audio.onloadedmetadata=()=>{

duration.textContent=format(audio.duration);

};

audio.ontimeupdate=()=>{

progress.value=(audio.currentTime/audio.duration)*100||0;

current.textContent=format(audio.currentTime);

};

progress.oninput=()=>{

audio.currentTime=(progress.value/100)*audio.duration;

};

document.getElementById("prevSong").onclick=()=>{

audio.currentTime=0;

};

document.getElementById("nextSong").onclick=()=>{

audio.currentTime=audio.duration;

};

}