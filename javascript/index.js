function updateTime(){
    //london
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
//moscow
let moscowElement = document.querySelector("#moscow");
let moscowDateElement = moscowElement.querySelector(".date");
let moscowTimeElement = moscowElement.querySelector(".time");
let moscowTime = moment().tz("Europe/Moscow");
moscowDateElement.innerHTML = moscowTime.format("MMMM Do YYYY");
moscowTimeElement.innerHTML = moscowTime.format("h:mm:ss [<small>]A[</small>]");
//alaska
let alaskaElement = document.querySelector("#alaska");
let alaskaDateElement = alaskaElement.querySelector(".date");
let alaskaTimeElement = alaskaElement.querySelector(".time");
let alaskaTime = moment().tz("Alaska");
alaskaDateElement.innerHTML = alaskaTime.format("MMMM Do YYYY");
alaskaTimeElement.innerHTML = alaskaTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);



