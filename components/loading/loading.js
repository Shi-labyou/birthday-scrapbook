function renderLoadingScreen(){

return`

<div class="loading-screen">

    <div class="loader">

    <img src="assets/decorations/flower-top-left.png">
    <img src="assets/decorations/flower-top-right.png">
    <img src="assets/decorations/flower-bottom-right.png">

</div>

    <h2 class="loading-title">

        Preparing your surprise...

    </h2>

    <p
        id="loadingSubtitle"
        class="loading-subtitle">

        Please wait...

    </p>

</div>

`;

}

function initializeLoadingScreen(){

const subtitle=document.getElementById("loadingSubtitle");

setTimeout(()=>{

subtitle.textContent="Creating beautiful memories...";

},1200);

setTimeout(()=>{

subtitle.textContent="Almost ready...";

},2400);

setTimeout(()=>{

    
setBackground("assets/backgrounds/intro-bg.jpg");

navigate(
    renderEnvelopeScreen,
    initializeEnvelopeScreen
);

},4000);

}