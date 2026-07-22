function renderEnvelopeScreen(){

return`

<div class="envelope-screen">

    <div
        class="envelope"
        id="envelope">

        <div class="envelope-flap"></div>

        <div class="envelope-base"></div>

    </div>

    <div class="envelope-text">

        Click the envelope ❤️

    </div>

</div>

`;

}

function initializeEnvelopeScreen(){

const envelope=document.getElementById("envelope");

envelope.onclick=()=>{

alert("Next: Intro Letter");

};

}