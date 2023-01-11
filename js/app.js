const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


const weekday = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("daily").innerHTML = day;


const timely = [
"..Closed..",
"Open today 09:00am - 05:00pm",
"Open today 09:00am - 05:00pm",
"Open today 09:00am - 05:00pm",
"Open today 09:00am - 05:00pm",
"Open today 09:00am - 05:00pm",
"..Closed.."];

const t = new Date();
let time = timely[t.getDay()];
document.getElementById("daytime").innerHTML = time;

