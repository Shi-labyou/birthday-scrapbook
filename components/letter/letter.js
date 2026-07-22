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

button:"Enter Our Scrapbook",

text:`

YOUR MAIN LETTER WILL GO HERE.

For now, this is placeholder text.

In the final version you'll simply replace this block with your complete birthday message.

`

}

};

function renderLetter(type="intro"){

const page=LetterPages[type];

return`

<div class="letter-screen">

<div
class="letter-paper"
id="letterPaper">

<div class="read-progress">

<div
id="progressBar"
class="read-progress-bar">

</div>

</div>

<h1 class="letter-title">

${page.title}

</h1>

<div
id="letterContent"
class="letter-content">

</div>

<div class="letter-actions">

<button
id="letterButton"
class="letter-button"
disabled>

${page.button}

</button>

</div>

</div>

</div>

`;

}

function typeWriter(text,element,callback){

let i=0;

function write(){

if(i<text.length){

element.textContent+=text[i];

i++;

setTimeout(write,18);

}else{

callback();

}

}

write();

}

function initializeLetter(type="intro"){

const page=LetterPages[type];

const paper=document.getElementById("letterPaper");

const content=document.getElementById("letterContent");

const button=document.getElementById("letterButton");

const progress=document.getElementById("progressBar");

typeWriter(

page.text.trim(),

content,

()=>{

button.disabled=false;

}

);

paper.addEventListener("scroll",()=>{

const max=

paper.scrollHeight-paper.clientHeight;

const percent=

max<=0

?100

:(paper.scrollTop/max)*100;

progress.style.width=percent+"%";

});

button.onclick=()=>{

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