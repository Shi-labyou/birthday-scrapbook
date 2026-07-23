const scrapbookPages={

home:{

title:"Welcome ❤️",

render(){

return`

<h2>Happy Birthday ❤️</h2>

<p>

Welcome to your digital scrapbook.

Use the menu to explore every memory.

</p>

`;

}

},

album:AlbumPage,

timeline: TimelinePage,

places: PlacesPage, 

reasons: ReasonsPage,

future: FuturePage,

};

function renderScrapbook(active="home"){

const page=scrapbookPages[active];

return`

<div class="scrapbook-screen">

<div class="scrapbook-book">

<div class="scrapbook-sidebar">

<h2 class="sidebar-title">

📖 Scrapbook

</h2>

${Object.keys(scrapbookPages).map(key=>`

<button
class="sidebar-button ${active===key?"active":""}"
data-page="${key}">

${scrapbookPages[key].title}

</button>

`).join("")}

</div>

<div class="scrapbook-page">

<div class="paper">

${page.render()}

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

    if(document.getElementById("albumViewer")){

        initializeAlbumViewer();

        if(document.getElementById("musicAudio")){

    initializeMusic();

}

    }

}