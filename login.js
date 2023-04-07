
alert("hello")

let login1=document.getElementById("login1")
login1.addEventListener("submit",(event)=>{
event.preventDefault();


let Email=event.target.email.value
let Password=event.target.password.value



console.log(Email,Password) 




login1.reset();

})