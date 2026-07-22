function renderIntroLetter(){

return`

<div class="letter-screen">

<div class="letter-paper">

<h1>To My Favorite Person ❤️</h1>

<p>

If you're reading this, it means you found the correct password.

I wanted to create something more than just a simple birthday greeting.

So instead, I made this little scrapbook that tells our story in a way that words alone never could.

</p>

<p>

Every page was made with love.

Every animation...

Every photo...

Every little detail...

Was created just for you.

</p>

<p>

So before we continue...

Take your time.

Enjoy every page.

I hope this makes you smile.

</p>

<button
id="continueButton"
class="next-button">

Continue ❤️

</button>

</div>

</div>

`;

}

function initializeIntroLetter(){

document
.getElementById("continueButton")
.onclick=()=>{

 navigate(
        renderScrapbook,
        initializeScrapbook
    );

};

}