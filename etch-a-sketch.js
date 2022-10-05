const container = document.querySelector('.container');
let userColor = document.querySelector("#color");
let colorSelection

//listen for user to select color and return value to colorSelection
function colorChoice() {
userColor.addEventListener("change",(e) => {
  colorSelection = e.target.value;
  return colorSelection;
 //console.log(colorSelection);
});
}

// add 16x16 grid default grid
for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  container.appendChild(div);
  }
  
// create grid based on user input on click
function customGrid () {
  let arg = prompt("How many squares per side?");

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
    div.classList.remove('black-fill-color')
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
    if (colorSelection == null) {
    e.target.classList.add("black-fill-color");
    }
    else {
    e.target.style.backgroundColor = colorSelection;
    }
  })
}
