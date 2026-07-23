const AlbumPage = {

    title: "📷 Album",

    photos:AlbumData,

    render() {

        return `

<h1 class="page-title">📷 Our Album</h1>

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

<div id="albumViewer" class="album-viewer hidden">

<div class="album-overlay"></div>

<div class="album-modal">

<button class="album-close">&times;</button>

<button class="album-nav album-prev">&#10094;</button>

<img id="viewerImage" class="viewer-image">

<div class="viewer-info">

<h2 id="viewerTitle"></h2>

<p id="viewerDescription"></p>

</div>

<button class="album-nav album-next">&#10095;</button>

</div>

</div>

`;

    }

};

function initializeAlbumViewer(){

    const viewer=document.getElementById("albumViewer");

    if(!viewer) return;

    const image=document.getElementById("viewerImage");
    const title=document.getElementById("viewerTitle");
    const description=document.getElementById("viewerDescription");
    const modal=viewer.querySelector(".album-modal");

    let currentIndex=0;

    let startX=0;
    let endX=0;

    function show(index){

        currentIndex=(index+AlbumPage.photos.length)%AlbumPage.photos.length;

        const photo=AlbumPage.photos[currentIndex];

        image.src=photo.image;
        image.onerror=()=>image.src="assets/images/album/placeholder.jpg";

        title.textContent=photo.title;
        description.textContent=photo.description;

        viewer.classList.remove("hidden");

    }

    function close(){

        viewer.classList.add("hidden");

    }

    document.querySelectorAll(".album-card").forEach(card=>{

        card.onclick=()=>show(Number(card.dataset.index));

    });

    viewer.querySelector(".album-close").onclick=close;
    viewer.querySelector(".album-overlay").onclick=close;

    viewer.querySelector(".album-prev").onclick=()=>show(currentIndex-1);
    viewer.querySelector(".album-next").onclick=()=>show(currentIndex+1);

    document.addEventListener("keydown",e=>{

        if(viewer.classList.contains("hidden")) return;

        if(e.key==="Escape") close();

        if(e.key==="ArrowLeft") show(currentIndex-1);

        if(e.key==="ArrowRight") show(currentIndex+1);

    });

    modal.addEventListener("touchstart",e=>{

        startX=e.changedTouches[0].clientX;

    });

    modal.addEventListener("touchend",e=>{

        endX=e.changedTouches[0].clientX;

        const distance=endX-startX;

        if(Math.abs(distance)<50) return;

        if(distance>0){

            show(currentIndex-1);

        }else{

            show(currentIndex+1);

        }

    });

}