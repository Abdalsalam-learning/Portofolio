const nm = document.getElementById("name");
const mail = document.getElementById("email");
const mess = document.getElementById("message");
const btn = document.getElementById("btn");
const drk = document.getElementById("dark");
const rgx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
const root = document.documentElement
let isDark = false;
drk.addEventListener("click",(e)=>{
    console.log("FFFF")
    if(isDark)root.style.setProperty('--bgc','#333');
    else root.style.setProperty('--bgc','#4c8a5f');
    isDark = !isDark
})
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    nm.style.backgroundColor = (nm.value?"#fff":"red");
    mail.style.backgroundColor = (mail.value.match(rgx)?"#fff":"red");
    mess.style.backgroundColor  = (mess.value?"#fff":"red");
})
