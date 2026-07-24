function renderLoadingScreen(){

return`

<div class="loading-screen">

    <div class="loader">

    <img src="assets/decorations/loading.png">
    <img src="assets/decorations/loading.png">
    <img src="assets/decorations/loading.png">

</div>

    <h2 class="loading-title">

        Preparing your journey...

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

subtitle.textContent="Creating all the loves...";

},1500);

setTimeout(()=>{

subtitle.textContent="Almost ready...";

},2800);

setTimeout(()=>{

    
setBackground("assets/backgrounds/intro-bg.jpg");

navigate(
    renderEnvelopeScreen,
    initializeEnvelopeScreen
);

},6000);

}