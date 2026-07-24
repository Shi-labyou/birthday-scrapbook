function navigate(renderFunction,initializeFunction){

const app=document.getElementById("app");

app.innerHTML=renderFunction();

if(initializeFunction){

initializeFunction();

}

}

function setBackground(image){

document.body.style.backgroundImage=

`url('${image}')`;

}