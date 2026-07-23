const AlbumPage={

title:"📷 Album",

photos:[

{

image:"assets/images/album/placeholder.jpg",

title:"Memory One",

description:"Replace with your own memory."

},

{

image:"assets/images/album/placeholder.jpg",

title:"Memory Two",

description:"Replace with your own memory."

},

{

image:"assets/images/album/placeholder.jpg",

title:"Memory Three",

description:"Replace with your own memory."

}

],

render(){

return`

<h1 class="page-title">

📷 Our Album

</h1>

<div class="album-grid">

${this.photos.map((photo,index)=>`

<div

class="album-card"

data-index="${index}">

<img

class="album-image"

src="${photo.image}"

alt="${photo.title}"

onerror="this.src='assets/images/album/placeholder.jpg'">

<div class="album-info">

<h3 class="album-title">

${photo.title}

</h3>

<p class="album-description">

${photo.description}

</p>

</div>

</div>

`).join("")}

</div>

`;

}

};