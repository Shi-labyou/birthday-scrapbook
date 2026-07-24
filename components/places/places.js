const PlacesPage={

title:"🗺️ Places",

places:PlacesData,

render(){

return`

<h1 class="page-title">

Places We've Been

</h1>

<div class="map-board">

<img

class="map-image"

src="assets/images/map/places.png"

onerror="this.style.display='none'">

${this.places.map((place,index)=>`

<button

class="map-pin"

style="top:${place.top};left:${place.left};"

data-index="${index}">

📍

</button>

`).join("")}

</div>

<div id="placeInfo" class="place-info">

Select a location.

</div>

`;

}

};

function initializePlaces(){

const info=document.getElementById("placeInfo");

if(!info) return;

document.querySelectorAll(".map-pin").forEach(pin=>{

pin.onclick=()=>{

const place=PlacesData[pin.dataset.index];

info.innerHTML=`

<h3>${place.location}</h3>

${place.places.map(memory=>`

<div class="place-memory">

<h4>${memory.name}</h4>

<p>${memory.description}</p>

</div>

`).join("")}

`;

};

});

}