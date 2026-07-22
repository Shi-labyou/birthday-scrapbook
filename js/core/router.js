function navigate(renderFunction,initializeFunction){

const app=document.getElementById("app");

app.innerHTML=renderFunction();

if(initializeFunction){

initializeFunction();

}

}