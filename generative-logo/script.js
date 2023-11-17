//random number of petals
// let n = Math.floor(Math.random() * (16 - 4 +1) + 4);
let n = 16;
//random roundness
// let bouba = Math.random()*100;
let bouba = 45;
//assigning variables to use later
let node = document.getElementsByClassName("node");
let petal = document.getElementsByClassName("petal");
let container = document.getElementById("container");
let petalContainer= document.getElementById("petal-container");

//adding random number of petals
for(i=0;i<n;i++){
  petalContainer.innerHTML += "<div class='petal'></div>";
}

//random number of nodes per petal
let nodeNumber;

if(n >= 4 && n < 5){
  nodeNumber = Math.floor(Math.random()*(5-3+1)+3);
}   
if (n >= 5 && n<=7){
  nodeNumber = Math.floor(Math.random()*(4-2+1)+2);
}
if (n > 7 && n <= 10){
  nodeNumber = Math.floor(Math.random()*(2-1+1)+1);
}
if (n > 10){
   nodeNumber = 1;
}

//positioning petals
let angle = (2*Math.PI / n);

for(i=0;i<n;i++){
  petal[i].style.left = (Math.cos(angle*i))*25 + "%";//need to adjust positioning relative to center 
  petal[i].style.top = (Math.sin(angle*i))*25 + "%";
  petal[i].style.transform = "rotate(" + (angle*i + Math.PI/2) + "rad)";
  
}

//adding nodes to each petal
if (nodeNumber == 1){
  for (i=0; i<n; i++){
    petal[i].innerHTML += "<div class='node' id='node5'></div>";
  }
  }  
if (nodeNumber == 2 || nodeNumber == 3){
  for (i=0; i<n; i++){
    for(j=0; j<nodeNumber; j++){
      petal[i].innerHTML += "<div class='node' id='node" + (3+j) + "'></div>";
    }
  }
  } 
if (nodeNumber == 4 || nodeNumber ==5){
  for (i=0; i<n; i++){
    for(j=0; j<nodeNumber; j++){
      petal[i].innerHTML += "<div class='node' id='node" + (1+j) + "' ></div>";
    }
  }
  } 
//adding random roundness (bouba level)
for(let nodes of node){
  nodes.style.borderRadius = "100%" + bouba + "%" + "100%" + bouba + "%";
}

//bouba slider
let userBouba = document.getElementById("user-bouba");

function boubaFunction(){
  for(let nodes of node){
  nodes.style.borderRadius= "100%" + userBouba.value + "%" + "100%" + userBouba.value + "%";
  }
}

//random colors
let colors = ["#E05A00", "#69140E", "#0E1428"];
let randomColor = Math.floor(Math.random()*colors.length);

let coinFlip = Math.floor(Math.random()*(2)+1);
center.style.backgroundColor = colors[0];

for(let nodes of node){
  nodes.style.backgroundColor = colors[1];
}

//color selectors
let userCenterColor = document.getElementById("center-color");
let userPetalColor = document.getElementById("petal-color");

function petalColor(){
  for(let nodes of node){
    nodes.style.backgroundColor = colors[userPetalColor.value];
  }
}

function centerColor(){
  center.style.backgroundColor = colors[userCenterColor.value];
}

//randomize button
function randomize(){
  console.log(petalContainer);
  petalContainer.innerHTML = ""; //this will clear what is currently in the petal container out so I can add more without stacking everything on top of itself
  console.log(petalContainer);
  //repeat all the randomize code here with new variable names
  let m = Math.floor(Math.random() * (16 - 4 +1) + 4);

//adding random number of petals
for(i=0;i<m;i++){
  petalContainer.innerHTML += "<div class='petal'></div>";
}

//random number of nodes per petal
let newNodeNumber;

if(m >= 4 && m < 5){
  newNodeNumber = Math.floor(Math.random()*(5-3+1)+3);
}   
if (m >= 5 && m<=7){
  newNodeNumber = Math.floor(Math.random()*(4-2+1)+2);
}
if (m > 7 && m <= 10){
  newNodeNumber = Math.floor(Math.random()*(2-1+1)+1);
}
if (m > 10){
   newNodeNumber = 1;
}
console.log(newNodeNumber);
//positioning petals
let angle = (2*Math.PI / m);

for(i=0;i<m;i++){
  petal[i].style.left = (Math.cos(angle*i))*25 + "%";//need to adjust positioning relative to center 
  petal[i].style.top = (Math.sin(angle*i))*25 + "%";
  petal[i].style.transform = "rotate(" + (angle*i + Math.PI/2) + "rad)";
  
}

//adding nodes to each petal
if (newNodeNumber == 1){
  for (i=0; i<m; i++){
    petal[i].innerHTML += "<div class='node' id='node5'></div>";
  }
  }  
if (newNodeNumber == 2 || newNodeNumber == 3){
  for (i=0; i<m; i++){
    for(j=0; j<newNodeNumber; j++){
      petal[i].innerHTML += "<div class='node' id='node" + (3+j) + "'></div>";
    }
  }
  } 
if (newNodeNumber == 4 || newNodeNumber ==5){
  for (i=0; i<m; i++){
    for(j=0; j<newNodeNumber; j++){
      petal[i].innerHTML += "<div class='node' id='node" + (1+j) + "' ></div>";
    }
  }
  } 

  let newBouba = Math.random()*100;
  let newRandomColor = Math.floor(Math.random()*colors.length);
  let newCoinFlip = Math.floor(Math.random()*(2)+1);

  for(let nodes of node){
    nodes.style.borderRadius = "100%" + newBouba + "%" + "100%" + newBouba + "%";
  }

  center.style.backgroundColor = colors[(newRandomColor + newCoinFlip)%3];
  for(let nodes of node){
    nodes.style.backgroundColor = colors[newRandomColor];
}

userBouba.value = newBouba;
userCenterColor.value = (newRandomColor + newCoinFlip)%3;
userPetalColor.value = newRandomColor;



}