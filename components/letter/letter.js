const LetterPages = {

    intro: {

        title: "To My Favorite Person ❤️",

        button: "Continue ❤️",

        text: `

If you're reading this, it means you found the correct password.

I wanted to create something much more special than simply saying Happy Birthday.

So I created this scrapbook.

Every page has something waiting for you.

I hope it makes you smile.

`

    },

    main: {

        title: "Happy Birthday ❤️",

        button: "Enter Our Scrapbook",

        text: `

YOUR MAIN LETTER WILL GO HERE.

For now, this is placeholder text.

In the final version you'll simply replace this block with your complete birthday message.

`

    }

};

function renderLetter(type = "intro") {

    const page = LetterPages[type];

    return `

<div class="letter-screen">

    <div class="letter-paper" id="letterPaper">

        <div class="read-progress">
            <div id="progressBar" class="read-progress-bar"></div>
        </div>

        <h1 class="letter-title">
            ${page.title}
        </h1>

        <div id="letterContent" class="letter-content"></div>

        <div class="letter-actions">

            <button
                id="letterButton"
                class="letter-button"
                disabled>

                ${page.button}

            </button>

        </div>

    </div>

</div>

`;

}

function typeWriter(text, element, progressBar, callback) {

    let index = 0;

    const totalCharacters = text.length;

    function write() {

        if (index < totalCharacters) {

            element.textContent += text[index];

            index++;

            const percent = (index / totalCharacters) * 100;
            progressBar.style.width = percent + "%";

            setTimeout(write, 18);

        } else {

            progressBar.style.width = "100%";

            callback();

        }

    }

    write();

}

function initializeLetter(type = "intro") {

    const page = LetterPages[type];

    const content = document.getElementById("letterContent");
    const button = document.getElementById("letterButton");
    const progress = document.getElementById("progressBar");

    progress.style.width = "0%";

    typeWriter(

        page.text.trim(),

        content,

        progress,

        () => {

            button.disabled = false;

        }

    );

    button.onclick = () => {

        if (type === "intro") {

            navigate(

                () => renderLetter("main"),

                () => initializeLetter("main")

            );

            return;

        }

        navigate(

            renderScrapbook,

            initializeScrapbook

        );

    };

}