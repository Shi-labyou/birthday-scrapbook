const TimelinePage = {

    title: "🕒 Timeline",

    events: [

        {
            date: "Day 1",
            title: "Our Story Begins",
            description: "Replace with your first memory together."
        },

        {
            date: "Another Day",
            title: "A Beautiful Memory",
            description: "Replace with another special moment."
        },

        {
            date: "Today",
            title: "Happy Birthday ❤️",
            description: "The beginning of another wonderful year."
        }

    ],

    render() {

        return `

<h1 class="page-title">🕒 Our Timeline</h1>

<div class="timeline">

${this.events.map(event => `

<div class="timeline-item">

    <div class="timeline-dot"></div>

    <div class="timeline-card">

        <span class="timeline-date">${event.date}</span>

        <h3>${event.title}</h3>

        <p>${event.description}</p>

    </div>

</div>

`).join("")}

</div>

`;

    }

};