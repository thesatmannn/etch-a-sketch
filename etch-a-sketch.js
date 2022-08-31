const container = document.querySelector('.container');


// add 16x16 divs
//function defaultGrid() {
for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  container.appendChild(div);
  }
  




const square = document.querySelectorAll('.square');

//add event listener for drawinf


  // create divs based on user input on click
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
  container.classList.remove("black-fill-color");
}

function clear() {
  while(container.firstChild){
    container.removeChild(container.lastChild); 
 }
}

function draw() {
  container.addEventListener('mouseover', function(e) {
    e.target.classList.add("black-fill-color");
  })

}

