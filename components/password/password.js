const APP_PASSWORD = "happybirthday";

function renderPasswordScreen() {

    return `

    <div class="password-screen">

        <div class="password-card">

            <h1 class="password-title">
                Our Scrapbook
            </h1>

            <p class="password-subtitle">
                Enter the password
            </p>

            <input
                id="passwordInput"
                class="password-input"
                type="password"
                placeholder="Password">

            <button
                id="passwordButton"
                class="password-button">

                Open

            </button>

            <p
                id="passwordMessage"
                class="password-message">
            </p>

        </div>

    </div>

    `;

}

function renderLoadingScreen(){

    return `

    <div class="loading-screen">

        <div class="loader"></div>

        <div
            id="loadingText"
            class="loading-text">

            Preparing your surprise...

        </div>

    </div>

    `;

}

function initializePasswordScreen() {

    const screen=document.querySelector(".password-screen");
    const card=document.querySelector(".password-card");

    const input=document.getElementById("passwordInput");
    const button=document.getElementById("passwordButton");
    const message=document.getElementById("passwordMessage");

    function login(){

        if(input.value===APP_PASSWORD){

            message.style.color="#2E7D32";
            message.textContent="Access Granted ❤️";

            button.textContent="Opening...";

            button.disabled=true;
            input.disabled=true;

            screen.classList.add("fade-out");

            setTimeout(()=>{

                document.getElementById("app").innerHTML=renderLoadingScreen();

                const text=document.getElementById("loadingText");

                setTimeout(()=>{

                    text.textContent="Creating beautiful memories...";

                },1200);

                setTimeout(()=>{

                    text.textContent="Almost ready...";

                },2400);

            },700);

        }

        else{

            message.style.color="#D32F2F";

            message.textContent="Incorrect Password";

            card.classList.remove("shake");

            void card.offsetWidth;

            card.classList.add("shake");

            input.select();

        }

    }

    button.onclick=login;

    input.addEventListener("keydown",(event)=>{

        if(event.key==="Enter"){

            login();

        }

    });

}