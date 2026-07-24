document.addEventListener("DOMContentLoaded",()=>{

    document.body.insertAdjacentHTML(

        "beforeend",

        renderDecorations()

    );

    document.body.insertAdjacentHTML(

        "beforeend",

        renderMusicPlayer()

    );

    initializeMusicPlayer();

    setBackground("assets/backgrounds/landing-bg.jpg");

    navigate(

        renderPasswordScreen,

        initializePasswordScreen

    );

});