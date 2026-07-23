const scrapbookPages={

home:{

title:"Welcome ❤️",

render(){

return`

<h2>Happy Birthday ❤️</h2>

<p>

Welcome to your digital scrapbook.

Explore every memory to unlock the final surprise.

</p>

`;

}

},

album:AlbumPage,

timeline:TimelinePage,

places:PlacesPage,

reasons:ReasonsPage,

future:FuturePage

};


function renderScrapbook(active="home"){

const completed=checkScrapbookCompletion();

const pages={...scrapbookPages};


if(completed){

pages.ending={

title:"🌙 Ending ✨",

render(){

return EndingPage.render();

}

};

}


const page=pages[active];


return`

<div class="scrapbook-screen">

<div class="scrapbook-book">


<div class="scrapbook-sidebar">

<h2 class="sidebar-title">

📖 Scrapbook

</h2>


${Object.keys(pages).map(key=>`

<button

class="sidebar-button ${active===key?"active":""}"

data-page="${key}">


${pages[key].title}

${

key!=="home" && key!=="ending" && ScrapbookStorage.isVisited(key)

? " ✓"

: ""

}


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


const page=button.dataset.page;


if(page!=="home" && page!=="ending"){

ScrapbookStorage.markVisited(page);

}


navigate(

()=>renderScrapbook(page),

initializeScrapbook

);


};


});


if(document.getElementById("albumViewer")){

initializeAlbumViewer();

}


if(document.getElementById("replayButton")){

initializeEnding();

}


}