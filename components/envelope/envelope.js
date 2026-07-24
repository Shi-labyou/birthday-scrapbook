function renderEnvelopeScreen(){

return`

<div class="envelope-screen">

    <div
        class="envelope"
        id="envelope">

        <img
            class="envelope-back"
            src="assets/envelope/envelope-back.png"
            alt="Envelope">

        <img
            class="envelope-letter"
            src="assets/envelope/letter.png"
            alt="Letter">

        <img
            class="envelope-front"
            src="assets/envelope/envelope-front.png"
            alt="Envelope Front">

        <img
            class="envelope-seal"
            src="assets/envelope/seal.png"
            alt="Seal">

    </div>

    <div class="envelope-text">
        Click the envelope
    </div>

</div>

`;

}

function initializeEnvelopeScreen(){

const envelope=document.getElementById("envelope");

envelope.onclick=()=>{

    envelope.classList.add("opening");

    setTimeout(()=>{

        navigate(
            ()=>renderLetter("intro"),
            ()=>initializeLetter("intro")
        );

    },1300);

};

}

