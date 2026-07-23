const EndingPage={

title:"🌙 Ending ✨",

render(){

return`

<div id="endingOverlay" class="ending-overlay">

<div class="ending-scene">


<h1>

✨ Happy Birthday ❤️

</h1>


<p>

You discovered every memory.

This is the final chapter.

</p>


<p>

Thank you for being part of this journey.

</p>


<button id="replayButton">

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


button.onclick=()=>{

ScrapbookStorage.reset();


navigate(

renderPasswordScreen,

initializePasswordScreen

);

};

}