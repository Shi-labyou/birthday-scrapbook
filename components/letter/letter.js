const LetterPages = {

    intro: {

        title: "To My Favorite Person",

        button: "Continue",

        text: `

Heyy Babyy!
This is just a small appreciation gift/letter for you, my baby girl!

HAPYY HAPPYY HAPPYY BIRTHDAYYY BABYYY! 

HAPPY 18TH BIRTHDAYYYY!

I hope you can at least enjoy your day today/tomorrow since it's your birthday, although may mga bagay na di pabor na makaramdam ka ng happiness, I hope you would still enjoy your day :) 
If others can't make you happy on your birthday, I want you to make yourself to make your day a happy day :) Since ikaw lang naman ang mag didictate if you are happy and enjoying your day, might as well be happy on your own way <3 

I wish you a very very special day baby! Always take care and enjoy!

I was planning to create a physical letter at first since lumabo nga ang mata mo, but since hindi tayo makakapag kita sa birthday mo or a day before that, I just decided to create this virtual letter for you :))

You cannot proceed to the next page since I want you to take your time later to explore this scrapbook without a rush;))

I cannot promise you that the next page would be great or a "wow" feeling, since this was a cram gift but I hope it would still feel special to you, but still!! I'm sorry for cramming this baby and not putting too much effort, in fact I created this with a help of AI :(( I'm really really sorry baby :(( But all these letters naman is from me, I hope it'll feel genuine even a little bit<3 I hope you wouldn't take this as I don't love you that much anymore, I still and will love you so much baby <3

I'll stop making this all about myself na, I will just wish you a happy happy birthday, my Ali <333

Always take care! Enjoy this day and treat it as if the world is your own today!

I love you so much, Alrish Claire Manalo Rivera, CPA

I wish you a happy birthday and a pleasant day!



`

    },

    main: {

        title: "Happy Birthday ",

        button: "Enter Our Scrapbook",

        text: `

YOUR MAIN LETTER WILL GO HERE.


`

    }

};

function renderLetter(type = "intro") {

    const page = LetterPages[type];

    return `

<div class="letter-screen">

    <div class="letter-paper" id="letterPaper">

        <div class="read-progress">
            <div id="progressBar" class="read-progress-bar"></div>
        </div>

        <h1 class="letter-title">
            ${page.title}
        </h1>

        <div id="letterContent" class="letter-content"></div>

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

function typeWriter(text, element, progressBar, callback){

element.innerHTML='<span id="typeText"></span><span id="typingCursor" class="typing-cursor">|</span>';

const typeText=document.getElementById("typeText");
const cursor=document.getElementById("typingCursor");

let index=0;

const totalCharacters=text.length;

function getDelay(character){

if(character===" ") return 25;

if(character===",") return 220;

if(character==="." || character==="!" || character==="?") return 420;

if(character==="\n") return 300;

return 32+Math.random()*14;

}

function write(){

if(index>=totalCharacters){

progressBar.style.width="100%";

cursor.remove();

callback();

return;

}

typeText.textContent+=text[index];

index++;

progressBar.style.width=(index/totalCharacters)*100+"%";

setTimeout(write,getDelay(text[index-1]));

}

write();

}


function initializeLetter(type = "intro") {

    const page = LetterPages[type];

    const content = document.getElementById("letterContent");
    const button = document.getElementById("letterButton");
    const progress = document.getElementById("progressBar");

    button.disabled = true;
button.classList.remove("show");

    progress.style.width = "0%";

    typeWriter(

        page.text.trim(),

        content,

        progress,

        () => {

            button.disabled = false;
button.classList.add("show");
        }

    );

    button.onclick = () => {

        if(type==="intro"){

navigate(

()=>renderPasswordScreen({

title:"One More Password",

subtitle:"One last password before you can unlock my lovability...",

password:"18th",

button:"Unlock ",

nextRender:()=>renderLetter("main"),

nextInit:()=>initializeLetter("main")

}),

initializePasswordScreen

);

return;

}

navigate(

()=>`

<div class="scrapbook-opening">

<div class="opening-book">

</div>

<p class="opening-text">

Opening your scrapbook...

</p>

</div>

`,

()=>{

setBackground("assets/backgrounds/scrapbook-bg.jpg");

setTimeout(()=>{

navigate(

renderScrapbook,

initializeScrapbook

);

},1200);

}

);
    };

}