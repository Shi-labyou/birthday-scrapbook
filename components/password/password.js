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

function initializePasswordScreen() {

    const input = document.getElementById("passwordInput");
    const button = document.getElementById("passwordButton");
    const message = document.getElementById("passwordMessage");

    function login() {

        if (input.value === APP_PASSWORD) {

            message.style.color = "#2E7D32";
            message.textContent = "Access Granted ❤️";

            button.disabled = true;
            input.disabled = true;

            setTimeout(() => {

                alert("Password correct! Loading scrapbook...");

            }, 500);

        } else {

            message.style.color = "#D32F2F";
            message.textContent = "Incorrect Password";

            input.select();

        }

    }

    button.addEventListener("click", login);

    input.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            login();

        }

    });

}