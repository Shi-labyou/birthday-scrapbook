const EndingPage = {

    title: "🌙 Ending",

    render() {

        return `

<div class="ending-screen">

    <h1>Happy Birthday ❤️</h1>

    <p>

        Thank you for taking the time to go through every page.

        I hope this scrapbook made you smile.

    </p>

    <button id="replayButton" class="ending-button">

        Replay Scrapbook

    </button>

</div>

`;

    }

};

function initializeEnding(){

    document.getElementById("replayButton").onclick=()=>{

        navigate(

            renderPasswordScreen,

            initializePasswordScreen

        );

    };

}