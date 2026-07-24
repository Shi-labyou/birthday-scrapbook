const ReasonsPage={

title:"❤️ Reasons",

reasons:ReasonsData,

render(){

return`

<h1 class="page-title">

100 Reasons Why I Love You ❤️

</h1>

<div class="reasons-grid">

${this.reasons.map((reason,index)=>`

<div

class="reason-card"

data-index="${index}">

<div class="reason-inner">

<div class="reason-front">

${reason.title}

</div>

<div class="reason-back">

${reason.text}

</div>

</div>

</div>

`).join("")}

</div>

`;

}

};


function initializeReasons(){

document.querySelectorAll(".reason-card").forEach(card=>{

card.onclick=()=>{

card.classList.toggle("flipped");

};

});

}