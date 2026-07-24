function navigate(renderFunction,initializeFunction){

const app=document.getElementById("app");


app.classList.add("fade-page-out");


setTimeout(()=>{


app.innerHTML=renderFunction();


if(initializeFunction){

initializeFunction();

}


app.classList.remove("fade-page-out");

app.classList.add("fade-page-in");


setTimeout(()=>{

app.classList.remove("fade-page-in");

},700);


},300);


}

function setBackground(image){

const img=new Image();

img.src=image;


img.onload=()=>{

document.body.style.backgroundImage=

`
linear-gradient(
rgba(0,0,0,.25),
rgba(0,0,0,.25)
),
url('${image}')
`;

};

}