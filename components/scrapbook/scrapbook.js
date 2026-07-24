const scrapbookPages={

home:{

title:"Welcome ❤️",

render(){

const memories=[

{
id:"album",
name:"📷 Album"
},

{
id:"timeline",
name:"🕒 Timeline"
},

{
id:"places",
name:"🗺️ Places"
},

{
id:"reasons",
name:"❤️ Reasons"
},

{
id:"future",
name:"🌸 Future"
}

];


const completed=memories.filter(memory=>

ScrapbookStorage.isVisited(memory.id)

).length;


return`

<div class="scrapbook-home">

<div class="welcome-banner">

<h1 class="home-title">

Happy Birthday

</h1>

<p class="home-subtitle">

Every chapter in this scrapbook is made with love and a memory loss from the outer universe.
Explore all the pages of memories to reach the ending <3

</p>

</div>

<div class="progress-box">

<div class="progress-header">

<h3>

Memory Progress

</h3>

<span>

${completed} / ${memories.length}

</span>

</div>

<div class="memory-progress">

<div
class="memory-progress-fill"
style="width:${(completed/memories.length)*100}%">

</div>

</div>

</div>

<div class="memory-list">

${memories.map((memory,index)=>`

<div
class="memory-item ${ScrapbookStorage.isVisited(memory.id)?"completed":"locked"}"
style="animation-delay:${index*.08}s;">

<div class="memory-name">

${memory.name.replace(/[^\w\s']/g,"").trim()}

</div>

<div class="memory-status">

${ScrapbookStorage.isVisited(memory.id)
? '<span class="status-complete">Completed</span>'
: '<span class="status-locked">Locked</span>'}

</div>

</div>

`).join("")}

</div>

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

setTimeout(()=>{

initializeEnding();

},50);


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

Scrapbook

</h2>


${Object.keys(pages).map(key=>`

<button

class="sidebar-button 
${active===key ? "active" : ""}
${key!=="home" && key!=="ending" && ScrapbookStorage.isVisited(key) ? "visited" : ""}"

data-page="${key}">


${pages[key].title}


</button>


`).join("")}


</div>


<div class="scrapbook-page">

<div class="paper page-enter">

${page.render()}

<div class="paper-decoration-bottom"></div>

</div>

</div>


</div>

</div>

`;

}


function initializeScrapbook(){

    if(document.querySelector(".map-pin")){

initializePlaces();

}

    if(document.querySelector(".reason-card")){

initializeReasons();

}

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