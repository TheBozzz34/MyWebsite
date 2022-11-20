el=document.getElementById("time");


setInterval(function setTime(){ 
    let date1 = Math.floor(new Date('2022.11.20').getTime() / 1000);
    let date2 = Math.floor(new Date('2022.11.17').getTime() / 1000);
    var timeDifference = date1 - date2;
    var differenceDate = new Date(timeDifference * 1000);
    var diffHours = differenceDate.getUTCHours();
    var diffMinutes = differenceDate.getUTCMinutes();
    var diffSeconds = differenceDate.getUTCSeconds();
    
    var readableDifference = diffHours + ':' + diffMinutes + ':' + diffSeconds;
    
    el.textContent = readableDifference;    
}, 1000);
