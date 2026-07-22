function renderLoadingScreen(){

return`

<div class="loading-screen">

    <div class="loader"></div>

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

document.getElementById("app").innerHTML=renderEnvelopeScreen();

initializeEnvelopeScreen();

},4000);

}