const PlacesPage = {

    title: "🗺️ Places",

    places: [

        {
            name: "First Place",
            description: "Replace with your memory.",
            image: "assets/images/album/placeholder.jpg"
        },

        {
            name: "Favorite Spot",
            description: "Replace with your memory.",
            image: "assets/images/album/placeholder.jpg"
        },

        {
            name: "Another Memory",
            description: "Replace with your memory.",
            image: "assets/images/album/placeholder.jpg"
        }

    ],

    render() {

        return `

<h1 class="page-title">🗺️ Special Places</h1>

<div class="places-grid">

${this.places.map(place => `

<div class="place-card">

<img
class="place-image"
src="${place.image}"
alt="${place.name}"
onerror="this.src='assets/images/album/placeholder.jpg'">

<div class="place-content">

<h3>${place.name}</h3>

<p>${place.description}</p>

</div>

</div>

`).join("")}

</div>

`;

    }

};