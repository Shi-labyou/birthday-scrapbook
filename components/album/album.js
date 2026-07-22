const albumData=[

{

title:"First Meet",

description:"Replace this with your own story.",

emoji:"📷"

},

{

title:"Favorite Memory",

description:"Replace this with your own story.",

emoji:"🌸"

},

{

title:"Fun Day",

description:"Replace this with your own story.",

emoji:"🎈"

},

{

title:"Adventure",

description:"Replace this with your own story.",

emoji:"✈️"

},

{

title:"Birthday",

description:"Replace this with your own story.",

emoji:"🎂"

},

{

title:"More Soon",

description:"More memories to come ❤️",

emoji:"💖"

}

];

function renderAlbum(){

return`

<div class="album-screen">

<div class="album-container">

<div class="album-header">

<h1>

📷 Our Album

</h1>

<button
class="back-button"
id="backHome">

← Back

</button>

</div>

<div class="album-grid">

${albumData.map((photo,index)=>`

<div
class="photo-card"
data-index="${index}">

<div class="photo-placeholder">

${photo.emoji}

</div>

<div class="photo-title">

${photo.title}

</div>

</div>

`).join("")}

</div>

</div>

<div
class="photo-viewer"
id="photoViewer">

<div class="viewer-content">

<div
class="viewer-image"
id="viewerImage">

🖼️

</div>

<h2
class="viewer-title"
id="viewerTitle">

</h2>

<p
class="viewer-description"
id="viewerDescription">

</p>

<button
class="close-viewer"
id="closeViewer">

Close

</button>

</div>

</div>

</div>

`;

}

function initializeAlbum(){

document
.getElementById("backHome")
.onclick=()=>{

navigate(
    renderScrapbook,
    initializeScrapbook
);

};

const viewer=document.getElementById("photoViewer");

document.querySelectorAll(".photo-card").forEach(card=>{

card.onclick=()=>{

const photo=albumData[card.dataset.index];

document.getElementById("viewerImage").textContent=photo.emoji;

document.getElementById("viewerTitle").textContent=photo.title;

document.getElementById("viewerDescription").textContent=photo.description;

viewer.classList.add("show");

};

});

document
.getElementById("closeViewer")
.onclick=()=>{

viewer.classList.remove("show");

};

}