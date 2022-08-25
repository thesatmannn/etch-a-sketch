const cdiv = document.querySelector('.container');


// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";  
  cdiv.appendChild(div);
}

//change colors when mouse passes over divs 

document.getElementById("cdiv").addEventListener("mouseover", colorChange());


// change color to div as hover

function colorChange() {
    cdiv.style.color = "blue";
}
