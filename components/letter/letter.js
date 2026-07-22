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

        text: ``

    }

};

function renderLetter(type = "intro") {

    const page = LetterPages[type];

    return `

<div class="letter-screen">

    <div class="letter-paper">

        <h1 class="letter-title">

            ${page.title}

        </h1>

        <div
            class="letter-content"
            id="letterContent">

        </div>

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

function typeWriter(text, element, callback) {

    let index = 0;

    function type() {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

            setTimeout(type, 18);

        } else {

            callback();

        }

    }

    type();

}

function initializeLetter(type = "intro") {

    const page = LetterPages[type];

    const content = document.getElementById("letterContent");

    const button = document.getElementById("letterButton");

    typeWriter(

        page.text.trim(),

        content,

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