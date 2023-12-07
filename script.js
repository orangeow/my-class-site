let rows = document.getElementById("rows");

if (window.innerWidth < 875){
    rows.innerHTML += "<div class = 'row-skinny fill1'></div><div class = 'row-big'></div> <div class = 'row-big fill2'></div><div class = 'row-big'></div><div class = 'row-skinny fill1'></div><div class = 'row-big'></div><div class = 'row-big fill2'></div><div class = 'row-big'></div><div class = 'row-skinny fill1'></div>";
} else if (window.innerWidth >=875){
    rows.innerHTML = "<div class = 'row-big'></div><div class = 'row-skinny fill1'></div><div class = 'row-big'></div><div class = 'row-big fill2'></div><div class = 'row-big'></div><div class = 'row-skinny fill1'></div><div class = 'row-big'></div><div class = 'row-big fill2'></div><div class = 'row-big'></div><div class = 'row-skinny fill1'></div><div class = 'row-big'></div><div class = 'row-big fill2'></div><div class = 'row-big'></div>";
}

console.log(window.innerWidth);