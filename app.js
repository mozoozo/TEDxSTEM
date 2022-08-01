const subscribe = document.querySelector("#subscribe");
const thanks = document.querySelector(".pop");
const form = document.querySelector("form");
const input = document.querySelector("input");
const emails = document.querySelector(".emails"); 

subscribe.addEventListener("click", c=>{thanks.style.display="block"; form.style.display="none";});
input.addEventListener("keydown", type);

function type(e){
    console.log(e.target.value);
    emails.innerHTML= "<h3>" +e.target.value+ "</h3>";
}