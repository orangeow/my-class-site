function rushHourMeter(){
  let today = new Date();
  let thisHour = today.getHours();
  let thisMinute = today.getMinutes();
  let fishes = document.getElementById("fishes");

  console.log("this hour is" + thisHour);
  console.log("this minute is" + thisMinute);
  console.log(fishes);
//   if((thisHour < 5) || (thisHour > 10 && thisHour < 14) || (thisHour == 10 && thisMinute >= 30) || (thisHour == 5 && thisMinute < 45) || (thisHour == 14 && thisMinute < 45) || (thisHour > 20) || (thisHour ==20 && thisMinute >= 30)){
//     fishes.innerHTML = "<img class='fish' src='sardines-0.png'";
// }else 
if((thisHour == 5 && thisMinute >= 45) || (thisHour == 10 && thisMinute > 15 && thisMinute < 30)){
    fishes.innerHTML = "<img class='fish' src='sardines-1.png'>";
  }else if((thisHour == 6 && thisMinute > 0 && thisMinute <= 10) || (thisHour == 9 && thisMinute >= 50)){
    fishes.innerHTML = "<img class='fish' src='sardines-2.png'>";
  }else if((thisHour == 6 && thisMinute > 10 && thisMinute <= 25) || (thisHour == 9 && thisMinute > 35 && thisMinute < 50)){
    fishes.innerHTML = "<img class='fish' src='sardines-3.png'>";
  }else if((thisHour == 6 && thisMinute > 25 && thisMinute <= 40) || (thisHour == 9 && thisMinute > 20 && thisMinute <= 35)){
    fishes.innerHTML = "<img class='fish' src='sardines-4.png'>";
  }else if((thisHour == 6 && thisMinute > 40 && thisMinute <= 50) || (thisHour == 9 && thisMinute > 10 && thisMinute <= 20)){
    fishes.innerHTML = "<img class='fish' src='sardines-5.png'>";
  }else if((thisHour == 6 && thisMinute > 50) || (thisHour >= 7 && thisHour <= 9) || (thisHour == 9 && thisMinute > 0 && thisMinute <= 10)){
    fishes.innerHTML = "<img class='fish' src='sardines-6.png'>";
  }else if((thisHour == 14 && thisMinute >= 45) || (thisHour == 20 && thisMinute > 15 && thisMinute < 30)){
    fishes.innerHTML = "<img class='fish' src='sardines-1.png'>";
  }else if((thisHour == 15 && thisMinute > 0 && thisMinute <= 10) || (thisHour == 19 && thisMinute >= 50)){
    fishes.innerHTML = "<img class='fish' src='sardines-2.png'>";
  }else if((thisHour == 15 && thisMinute > 10 && thisMinute <= 25) || (thisHour == 19 && thisMinute > 35 && thisMinute < 50)){
    fishes.innerHTML = "<img class='fish' src='sardines-3.png'>";
  }else if((thisHour == 15 && thisMinute > 25 && thisMinute <= 40) || (thisHour == 19 && thisMinute > 20 && thisMinute <= 35)){
    fishes.innerHTML = "<img class='fish' src='sardines-4.png'>";
  }else if((thisHour == 15 && thisMinute > 40 && thisMinute <= 50) || (thisHour == 19 && thisMinute > 10 && thisMinute <= 20)){
    fishes.innerHTML = "<img class='fish' src='sardines-5.png'>";
  }else if((thisHour == 15 && thisMinute > 50) || (thisHour >= 16 && thisHour <= 19) || (thisHour == 19 && thisMinute > 0 && thisMinute <= 10)){
    fishes.innerHTML = "<img class='fish' src='sardines-6.png'>";
  }else{
    fishes.innerHTML = "<img class='fish' src='sardines-0.png'>";
  }

}

setInterval(rushHourMeter, 1000);