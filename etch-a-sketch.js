const container = document.querySelector('.container');
let userColor = document.querySelector("#color");
let colorSelection
let mouseDown = false;

//listen for mouse press to determine draw function
container.addEventListener('mousedown', function(e){
 mouseDown = true;
})

container.addEventListener('mouseup', function(e){
  mouseDown = false;
 })

//listen for user to select color and return value to colorSelection
function colorChoice() {
userColor.addEventListener("change",(e) => {
  colorSelection = e.target.value;
  return colorSelection;
});
}

// add 16x16 grid default grid
for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  container.appendChild(div);
  }
  
// create grid based on user input on click
function customGrid () {
  let arg = prompt("How many squares per side?(1-100)");

  if (arg <= 100 && arg > 0) {
   clear();

  for (let i = 0; i < (arg * arg); i++) {
    const div = document.createElement('div');

    div.setAttribute('style', `width:${400/arg}px; height:${400/arg}px`);
    container.appendChild(div);
   }
  }
 }
function erase() {
  const children = container.querySelectorAll('div');

  children.forEach(div => {
    if (colorSelection !== null) {
    div.style.backgroundColor = 'white'
    }
 });
}

function clear() {
  while(container.firstChild){
    container.removeChild(container.lastChild); 
 }
}

function draw() {
  container.addEventListener('mouseover', function(e) {
    if (colorSelection == null && mouseDown == true) {
    e.target.style.backgroundColor = 'black';
    }
    else if(colorSelection !== null && mouseDown == true) {
    e.target.style.backgroundColor = colorSelection;
    }
  })
}

function rainbow(){
  container.addEventListener('mouseover', function(e) {
    if (mouseDown == true) {
    e.target.style.backgroundColor = randomColor();
    }
 })
}

function randomColor(){
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  return `rgb(${a}, ${b}, ${c})`;
  }
