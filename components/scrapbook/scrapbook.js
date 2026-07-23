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

timeline:{

title:"🕒 Timeline",

render(){

return`

<h2>Timeline</h2>

<p>

Coming soon.

</p>

`;

}

},

map:{

title:"🗺️ Places",

render(){

return`

<h2>Places</h2>

<p>

Coming soon.

</p>

`;

}

},

reasons:{

title:"❤️ Reasons",

render(){

return`

<h2>Reasons</h2>

<p>

Coming soon.

</p>

`;

}

},

future:{

title:"🌸 Future",

render(){

return`

<h2>Future</h2>

<p>

Coming soon.

</p>

`;

}

}

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

    }

}