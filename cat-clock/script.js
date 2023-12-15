
let purr = document.getElementById("purr");
let meow = document.getElementById("meow");

// let thisSecond = today.getSeconds();
let thisMinute = new Date().getMinutes();
let thisHour = new Date().getHours(); //0-23

// thisHour = 8;
// thisMinute = 0;

let meowLetters = ["<span class='letter'>M</span>","<span class='letter'>E</span>","<span class='letter'>O</span>","<span class='letter'>W</span>"];

function secondTicker(){
  let today = new Date();
//   let thisSecond = today.getSeconds();
  console.log(today.getSeconds());
  if (today.getSeconds()==0){
      purr.innerHTML = "<span class= 'letter'>P</span>";
  } 
  
  if (today.getSeconds()==1){
    purr.innerHTML +=  "<span class= 'letter'>U</span>";
  } 
  
  if (today.getSeconds() > 1) {
    purr.innerHTML += "<span class= 'letter'>R</span>";
  }
  
}

setInterval(secondTicker, 1000);

// thisHour = 8;
// thisMinute = 0;

  if ((thisHour==8 && thisMinute < 5) || (thisHour==18 &&     thisMinute < 5)){
    purr.style.display = "none";
    document.body.style.backgroundColor = "#F91E19";
  
    meow.style.display = "flex";
  
    for(let letter of meowLetters){
      meow.innerHTML += letter;
    }

    meow.onclick = function(){
      meow.style.display = "none";
      purr.style.display = "flex";
      document.body.style.backgroundColor = "#E5A72F";
    }
  } else{
    purr.style.display = "flex";
    meow.style.display = "none";
    document.body.style.backgroundColor = "#E5A72F";
  }

