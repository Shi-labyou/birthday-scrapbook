function renderScrapbook(){

return`

<div class="scrapbook-screen">

<div class="scrapbook-container">

<h1 class="scrapbook-title">

📖 Our Birthday Scrapbook

</h1>

<div class="menu-grid">

<div class="menu-card" data-page="album">

<h3>📷 Album</h3>

<p>Our favorite memories together.</p>

</div>

<div class="menu-card" data-page="timeline">

<h3>🕒 Timeline</h3>

<p>The story of us.</p>

</div>

<div class="menu-card" data-page="map">

<h3>🗺️ Places</h3>

<p>Places we've been.</p>

</div>

<div class="menu-card" data-page="reasons">

<h3>❤️ Reasons</h3>

<p>100 reasons why I love you.</p>

</div>

<div class="menu-card" data-page="future">

<h3>🌸 Future</h3>

<p>Dreams we'll achieve together.</p>

</div>

</div>

</div>

</div>

`;

}

function initializeScrapbook(){

document.querySelectorAll(".menu-card").forEach(card=>{

card.onclick=()=>{

switch(card.dataset.page){

case "album":

navigate(
    renderAlbum,
    initializeAlbum
);

break;

default:

alert(card.dataset.page+" page coming soon.");

}

};

});

}