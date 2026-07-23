const EndingPage = {

    title:"🌙 Ending",

    render(){

        return`

<div class="ending-screen">

<h1>Happy Birthday ❤️</h1>

<p>

I hope this little scrapbook made you smile.

Thank you for being part of my memories.

</p>

<button
id="replayButton"
class="ending-button">

Replay ❤️

</button>

</div>

`;

    }

};


function initializeEnding(){

const button=document.getElementById("replayButton");

if(!button) return;


button.onclick=()=>{

navigate(

renderPasswordScreen,

initializePasswordScreen

);

};

}