const FuturePage = {

    title: "🌸 Future",

    dreams: [

        {
            title: "Dream #1",
            description: "Replace with your future plan together."
        },

        {
            title: "Dream #2",
            description: "Replace with your future plan together."
        },

        {
            title: "Dream #3",
            description: "Replace with your future plan together."
        }

    ],

    render() {

        return `

<h1 class="page-title">🌸 Our Future</h1>

<div class="future-grid">

${this.dreams.map(dream => `

<div class="future-card">

<h3>${dream.title}</h3>

<p>${dream.description}</p>

</div>

`).join("")}

</div>

`;

    }

};