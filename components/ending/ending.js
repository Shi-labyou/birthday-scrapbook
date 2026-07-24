const EndingPage={

title:"Ending",

render(){

return`

<div id="endingOverlay" class="ending-overlay">

<div class="ending-scene">

<div class="ending-glow"></div>

<h1 class="ending-title">

Happy Birthday

</h1>

<p class="ending-line line-1">

You discovered every memory.

</p>

<p class="ending-line line-2">

Every page, every photo, every little detail...

was made especially for you.

</p>

<p class="ending-line line-3">

I hope this scrapbook made you smile,

even just a little.

</p>

<p class="ending-line line-4">

Thank you for being part of these memories.

Happy Birthday ❤️

</p>

<button
id="replayButton"
class="ending-replay">

Replay Memories

</button>

</div>

</div>

`;

}

};

function initializeEnding(){

const button=document.getElementById("replayButton");

if(!button) return;

button.style.opacity="0";
button.style.pointerEvents="none";

setTimeout(()=>{

button.style.opacity="1";
button.style.pointerEvents="auto";

},6500);

button.onclick=()=>{

ScrapbookStorage.reset();

navigate(

renderPasswordScreen,

initializePasswordScreen

);

};

}