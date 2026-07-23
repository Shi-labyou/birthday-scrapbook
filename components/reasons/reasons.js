const ReasonsPage = {

    title: "❤️ Reasons",

    reasons: [

        "Reason #1",
        "Reason #2",
        "Reason #3",
        "Reason #4",
        "Reason #5",
        "Reason #6"

    ],

    render() {

        return `

<h1 class="page-title">❤️ Reasons I Love You</h1>

<div class="reasons-grid">

${this.reasons.map((reason,index)=>`

<div class="reason-card">

<div class="reason-number">
${index+1}
</div>

<p class="reason-text">
${reason}
</p>

</div>

`).join("")}

</div>

`;

    }

};