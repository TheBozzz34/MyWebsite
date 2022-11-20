el=document.getElementById("time");


setInterval(function setTime(){ 
    let date1 = Date.now();
    let date2 = "1668650832";
    var timeDifference = date1 - date2;
    var differenceDate = new Date(timeDifference * 1000);
    var diffHours = differenceDate.getUTCHours();
    var diffMinutes = differenceDate.getUTCMinutes();
    var diffSeconds = differenceDate.getUTCSeconds();
    
    var readableDifference = diffHours + ':' + diffMinutes + ':' + diffSeconds;
    
    el.textContent = readableDifference;    
}, 1000);
