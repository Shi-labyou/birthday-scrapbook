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

    navigate(

        renderPasswordScreen,

        initializePasswordScreen

    );

});