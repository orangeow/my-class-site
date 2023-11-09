//random number of petals
let n = Math.floor(Math.random() * (16 - 4 +1) + 4);
//random roundness
let bouba = Math.random()*100;
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
//random colors
let colors = ["#E05A00", "#69140E", "#0E1428"];
let randomColor = Math.floor(Math.random()*colors.length);
let coinFlip = Math.floor(Math.random()*(2)+1);
center.style.backgroundColor = colors[(randomColor+ coinFlip)%3];

for(let nodes of node){
  nodes.style.backgroundColor = colors[randomColor];
}