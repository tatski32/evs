const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const weekday = [
"Sunday - Closed",
"Monday - Open today 09:00am - 05:00pm",
"Tuesday - Open today 09:00am - 05:00pm",
"Wednesday - Open today 09:00am - 05:00pm",
"Thursday - Open today 09:00am - 05:00pm",
"Friday - Open today 09:00am - 05:00pm",
"Saturday - Closed"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("demo").innerHTML = day;
