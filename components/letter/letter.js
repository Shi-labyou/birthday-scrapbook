const LetterPages={

intro:{

title:"To My Favorite Person ❤️",

button:"Continue ❤️",

text:`

If you're reading this, it means you found the correct password.

I wanted to create something much more special than simply saying Happy Birthday.

So I created this scrapbook.

Every page has something waiting for you.

I hope it makes you smile.

`

},

main:{

title:"Happy Birthday ❤️",

button:"Open Scrapbook",

text:`

(Main birthday letter goes here.)

`

}

};

function renderLetter(type="intro"){

const page=LetterPages[type];

return`

<div class="letter-screen">

<div class="letter-paper">

<h1 class="letter-title">

${page.title}

</h1>

<div class="letter-content">

${page.text}

</div>

<div class="letter-actions">

<button
id="letterButton"
class="letter-button">

${page.button}

</button>

</div>

</div>

</div>

`;

}

function initializeLetter(type="intro"){

document.getElementById("letterButton").onclick=()=>{

if(type==="intro"){

navigate(

()=>renderLetter("main"),

()=>initializeLetter("main")

);

return;

}

navigate(

renderScrapbook,

initializeScrapbook

);

};

}