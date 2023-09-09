let date = new Date();
let dayOfWeek = date.getDay();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let dayName = days[dayOfWeek];
document.getElementById("dayOfTheWeek").textContent = (dayName);
document.getElementById("timeInMilliseconds").textContent = new Date().getTime();
