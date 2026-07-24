function renderDecorations(){

let petals="";

for(let i=0;i<10;i++){

petals+=`<div class="petal" style="
left:${Math.random()*100}%;
animation-delay:${Math.random()*10}s;
animation-duration:${10+Math.random()*8}s;
"></div>`;

}

return`

<div class="decor-layer">

<div class="ambient-light"></div>

<div class="sparkle sparkle1"></div>
<div class="sparkle sparkle2"></div>
<div class="sparkle sparkle3"></div>
<div class="sparkle sparkle4"></div>

${petals}

</div>

`;

}