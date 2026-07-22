function renderScrapbook(active="home"){

const pages={

home:{
title:"Welcome ❤️",
content:"Choose a section from the left."
},

album:{
title:"📷 Album",
content:"Album will be built here."
},

timeline:{
title:"🕒 Timeline",
content:"Timeline will be built here."
},

map:{
title:"🗺️ Places",
content:"Places will be built here."
},

reasons:{
title:"❤️ Reasons",
content:"Reasons will be built here."
},

future:{
title:"🌸 Future",
content:"Future plans will be built here."
}

};

const page=pages[active];

return`

<div class="scrapbook-screen">

<div class="scrapbook-book">

<div class="scrapbook-sidebar">

<h2 class="sidebar-title">

📖 Scrapbook

</h2>

<button class="sidebar-button" data-page="home">🏠 Home</button>

<button class="sidebar-button" data-page="album">📷 Album</button>

<button class="sidebar-button" data-page="timeline">🕒 Timeline</button>

<button class="sidebar-button" data-page="map">🗺️ Places</button>

<button class="sidebar-button" data-page="reasons">❤️ Reasons</button>

<button class="sidebar-button" data-page="future">🌸 Future</button>

</div>

<div class="scrapbook-page">

<h1 class="page-title">

${page.title}

</h1>

<div class="page-placeholder">

${page.content}

</div>

</div>

</div>

</div>

`;

}

function initializeScrapbook(){

document.querySelectorAll(".sidebar-button").forEach(button=>{

button.onclick=()=>{

navigate(

()=>renderScrapbook(button.dataset.page),

initializeScrapbook

);

};

});

}