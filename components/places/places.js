const PlacesPage={

title:"🗺️ Places",

places:PlacesData,

render(){

return`

<h1 class="page-title">

🗺️ Places We've Been

</h1>

<div class="places-grid">

${this.places.map(place=>`

<div class="place-card">

<img

class="place-image"

src="${place.image}"

onerror="this.src='assets/images/album/placeholder.jpg'">

<div class="place-content">

<h3>${place.name}</h3>

<p class="place-location">

📍 ${place.location}

</p>

<p>

${place.description}

</p>

</div>

</div>

`).join("")}

</div>

`;

}

};