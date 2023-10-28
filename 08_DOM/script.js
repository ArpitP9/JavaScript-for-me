const body = document.querySelector("body")
const b = document.querySelectorAll(".button")

b.forEach(function(button){
button.addEventListener("click",function(e){
       if(e.target.id == "bulb"){
        body.style.backgroundColor = "yellow";
       }
       if(e.target.id == "red"){
        body.style.backgroundColor = "red";
       }
       if(e.target.id == "green"){
        body.style.backgroundColor = "yellow";
       }
       if(e.target.id == "blue"){
        body.style.backgroundColor = "yellow";
       }
       if(e.target.id == "purple"){
        body.style.backgroundColor = "yellow";
       }
})
})