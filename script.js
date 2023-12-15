// let rows = document.getElementById("rows");

// if (window.innerWidth < 875) {
//     rows.innerHTML += "<div class = 'row-skinny fill1'></div><div class = 'row-big'></div> <div class = 'row-big fill2'></div><div class = 'row-big'></div><div class = 'row-skinny fill1'></div><div class = 'row-big'></div><div class = 'row-big fill2'></div><div class = 'row-big'></div><div class = 'row-skinny fill1'></div>";
// } else if (window.innerWidth >= 875) {
//     rows.innerHTML = "<div class = 'row-big'></div><div class = 'row-skinny fill1'></div><div class = 'row-big'></div><div class = 'row-big fill2'></div><div class = 'row-big'></div><div class = 'row-skinny fill1'></div><div class = 'row-big'></div><div class = 'row-big fill2'></div><div class = 'row-big'></div><div class = 'row-skinny fill1'></div><div class = 'row-big'></div><div class = 'row-big fill2'></div><div class = 'row-big'></div>";
// }

let buttons = document.getElementsByClassName("button");
let buttonHoles = document.getElementsByClassName("button-hole");

for(i=0;i<buttons.length;i++){
    let randomColor = Math.random()*360;
    buttons[i].style.backgroundColor = "hsl(" + randomColor + ", 42%, 40%)";
    buttons[i].style.border = "7px solid hsl(" + randomColor + ", 70%, 13%)";

    console.log(buttons[i]);
}
