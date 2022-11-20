el=document.getElementById("time");

setInterval(function setTime(){ 
    let date1 = new Date;
    let date2 = Date.parse("1668650832");
    let timeFrom = Math.abs(date1 - date2) / 36e5;
    el.textContent = timeFrom;    
}, 1000);
