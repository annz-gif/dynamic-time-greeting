let container = document.querySelector(".container");
let timeNow = new Date().getHours();
timeNow=7;
console.log(timeNow);
let greeting =
 timeNow >= 5  && timeNow < 12 
 ? "Good morning!"
 : timeNow >=12  && timeNow<18 
 ? "Good afternoon"
 :"Good evening";
 console.log(greeting);
 container.innerHTML=`<h1>${greeting}</h1>`