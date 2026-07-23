function renderPasswordScreen({

    title="Our Scrapbook",
    subtitle="Enter the password",
    password="happybirthday",
    button="Open",
    successText="Access Granted ❤️",
    nextRender=renderLoadingScreen,
    nextInit=initializeLoadingScreen

}={}){

    window.__PASSWORD_CONFIG__={

        password,
        successText,
        nextRender,
        nextInit

    };

    return`

<div class="password-screen">

    <div class="password-card">

        <h1 class="password-title">

            ${title}

        </h1>

        <p class="password-subtitle">

            ${subtitle}

        </p>

        <input
        id="passwordInput"
        class="password-input"
        type="password"
        placeholder="Password">

        <button
        id="passwordButton"
        class="password-button">

            ${button}

        </button>

        <p
        id="passwordMessage"
        class="password-message"></p>

    </div>

</div>

`;

}

function initializePasswordScreen(){

    const{

        password,
        successText,
        nextRender,
        nextInit

    }=window.__PASSWORD_CONFIG__;

    const screen=document.querySelector(".password-screen");
    const card=document.querySelector(".password-card");

    const input=document.getElementById("passwordInput");
    const button=document.getElementById("passwordButton");
    const message=document.getElementById("passwordMessage");

    function login(){

        if(input.value===password){

            message.style.color="#2E7D32";
            message.textContent=successText;

            button.disabled=true;
            input.disabled=true;

            screen.classList.add("fade-out");

            setTimeout(()=>{

                navigate(

                    nextRender,

                    nextInit

                );

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

    input.addEventListener("keydown",e=>{

        if(e.key==="Enter"){

            login();

        }

    });

}