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

Haiii Alii! Birthday mo na bukas, or maybe ngayon? Hindi ko alam kung kalian mo to oopen eh HAHAHA. So I wish you a very veryy
HAPPY BIRTHDAY!

Are you Happy? 

I hope you had a good day today:)) I'm so sorry I couldn't be by your side to celebrate your supposed most special birthday :(( I hope this letter could make your day happy, even a little bit!
I love you so soo much, Ali <3

If you were feeling lonely, You can always approach me, I'll listen and be your twin >.<
If you were sad and hurt, I'm here to relieve your pain and be your comfort person <3
If you felt something heavy inside your chest, you can let it all out and tell me, you can give me the burden you're feeling
If you were feeling angry and upset, you can rant and vent it onto me
I will always be here to listen to you

I love you so much, Ali. I want you to know that you are my favorite person, and my favorite of all beings and things in all universe. You means so much to me :))) 

I appreciate all the love you have given me
I appreciate all the experiences you've shared with me
I appreciate all the things you gave me
I appreciate all the efforts you put into me
I appreciate this journey with you <3

I whole heartedly wish you all the best in the whole universe! I know you deserve all of it! I wish you a happiest life ahead of you, and a very happy family you'd yearn for :)

I admire your bravery, on how you tackle the obstacles on your journey
I admire how you're able to handle your emotions now
I admire how you face the cruelty of this world
and I admire the most that you chose to continue to live, despite all of it, I hope you will always continue to do so <hugs, hugss, hugsss>

Now that you're 18, and legally adult(but still my baby inside). I hope many opportunities will come and open up for you. I wish you a fun and enjoyable college life! I hope you would have friends that will also be there for you and share memorable experiences with you, and be by your side throughout your entire college journey<3 I wish you would enjoy every moment of your life to the fullest dahil times will come and go, everything present right now will eventually be a fragment of memory, I just wish na if ever you would go back to these years of memory, I hope you enjoy it and don't have any regrets


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

if(character===" ") return 18;

if(character===",") return 140;

if(character==="." || character==="!" || character==="?") return 280;

if(character==="\n") return 180;

return 24 + Math.random()*10;

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