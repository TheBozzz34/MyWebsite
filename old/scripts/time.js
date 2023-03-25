el=document.getElementById("time");

function timeDiff( tstart, tend ) {
  var diff = Math.floor((tend - tstart) / 1000), units = [
    { d: 60, l: "seconds" },
    { d: 60, l: "minutes" },
    { d: 24, l: "hours" },
    { d: 7, l: "days" }
  ];

  var s = '';
  for (var i = 0; i < units.length; ++i) {
    s = (diff % units[i].d) + " " + units[i].l + " " + s;
    diff = Math.floor(diff / units[i].d);
  }
  return s;
}

setInterval(function setTime(){ 
    let date1 = Date.now();
    let date2 = "1668650832";
    var timeDifference = date1 - date2;
    var differenceDate = new Date(timeDifference * 1000);
    var diffHours = differenceDate.getUTCHours();
    var diffMinutes = differenceDate.getUTCMinutes();
    var diffSeconds = differenceDate.getUTCSeconds();
    
    var readableDifference = diffHours + ':' + diffMinutes + ':' + diffSeconds;
    var test = timeDiff( date2, date1);
    
    el.textContent = test;    
}, 1000);
