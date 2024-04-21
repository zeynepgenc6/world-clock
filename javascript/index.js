function updateTime() {
  //london
  let londonElement = document.querySelector("#london");
  if(londonElement){
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );}
  //moscow
  let moscowElement = document.querySelector("#moscow");
  if (moscowElement){
  let moscowDateElement = moscowElement.querySelector(".date");
  let moscowTimeElement = moscowElement.querySelector(".time");
  let moscowTime = moment().tz("Europe/Moscow");
  moscowDateElement.innerHTML = moscowTime.format("MMMM Do YYYY");
  moscowTimeElement.innerHTML = moscowTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );}
  //alaska
  let alaskaElement = document.querySelector("#alaska");
  if (alaskaElement){
  let alaskaDateElement = alaskaElement.querySelector(".date");
  let alaskaTimeElement = alaskaElement.querySelector(".time");
  let alaskaTime = moment().tz("America/Anchorage");
  alaskaDateElement.innerHTML = alaskaTime.format("MMMM Do YYYY");
  alaskaTimeElement.innerHTML = alaskaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );}
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city" >
        <div><h2>${cityTimeZone}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div></div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
      </div>
   
   
   `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
