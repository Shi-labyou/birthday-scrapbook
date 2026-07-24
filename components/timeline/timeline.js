const TimelinePage={

title:"🕒 Timeline",

events:TimelineData,


render(){

return`

<h1 class="page-title">

Our Timeline

</h1>


<div class="timeline-container">


${this.events.map((event,index)=>`


<div class="timeline-item">


<div class="timeline-dot"></div>


<div class="timeline-card">


${event.image ? `

<img

class="timeline-image"

src="${event.image}"

onerror="this.src='assets/images/album/placeholder.jpg'">

` : ""}


<h3>

${event.title}

</h3>


<p class="timeline-date">

${event.date}

</p>


<p>

${event.description}

</p>


</div>


</div>


`).join("")}


</div>

`;

}

};