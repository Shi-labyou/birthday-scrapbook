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

${createAlbumCard("First Meet")}
${createAlbumCard("Favorite Memory")}
${createAlbumCard("Fun Day")}
${createAlbumCard("Adventure")}
${createAlbumCard("Birthday")}
${createAlbumCard("More Soon")}

</div>

</div>

</div>

`;

}

function createAlbumCard(title){

return`

<div
class="photo-card">

<div class="photo-placeholder">

🖼️

</div>

<div class="photo-title">

${title}

</div>

</div>

`;

}

function initializeAlbum(){

document
.getElementById("backHome")
.onclick=()=>{

document.getElementById("app").innerHTML=renderScrapbook();

initializeScrapbook();

};

}