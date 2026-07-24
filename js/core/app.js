const DEV_MODE = false;

document.addEventListener("DOMContentLoaded",()=>{

    document.body.insertAdjacentHTML(

        "beforeend",

        renderDecorations()

    );

    document.body.insertAdjacentHTML(

        "beforeend",

        renderMusicPlayer()

    );

    initializeMusicPlayer();

    initializeDevMenu();

    setBackground("assets/backgrounds/landing-bg.jpg");

    navigate(

        renderPasswordScreen,

        initializePasswordScreen

    );

});

function initializeDevMenu(){

if(!DEV_MODE) return;


document.body.insertAdjacentHTML(

"beforeend",

`

<div class="dev-menu">

<button onclick="navigate(renderScrapbook,initializeScrapbook)">
Scrapbook
</button>

<button onclick="navigate(()=>renderLetter('main'),()=>initializeLetter('main'))">
Main Letter
</button>

<button onclick="navigate(renderEnvelopeScreen,initializeEnvelopeScreen)">
Envelope
</button>

</div>

`

);

}