const scrapbookPages={

home:{

title:"Welcome ❤️",

content:`
<h2>Happy Birthday!</h2>

<p>

Welcome to your own digital scrapbook.

Every section on the left contains a different memory, message, or surprise.

Take your time and enjoy everything.

</p>

`

},

album:{

title:"📷 Album",

content:`

<p>

This page will become our interactive photo album.

</p>

`

},

timeline:{

title:"🕒 Timeline",

content:`

<p>

This page will tell our story from the beginning until today.

</p>

`

},

map:{

title:"🗺️ Places",

content:`

<p>

Places we've been together.

</p>

`

},

reasons:{

title:"❤️ Reasons",

content:`

<p>

100 reasons why I appreciate you.

</p>

`

},

future:{

title:"🌸 Future",

content:`

<p>

Dreams we'll achieve together.

</p>

`

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

<h1 class="page-title">

${page.title}

</h1>

<div class="page-content">

${page.content}

</div>

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