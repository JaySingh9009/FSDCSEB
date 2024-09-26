var d = new Date();
var current_date = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+ d.getDate();
document.getElementById("p1").innerHTML = current_date;
var date = new Date();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
document.getElementById("p2").innerHTML = current_time;