/* To Do List
1. Create stoplight
2. Using the Dom establish variables for each color
3. Find a way to said color by clicking a button using the addEventListener
4. Add an event for mouseenter and mouseleave
*/

//FIRST ATTEMPT========================================================================================================================================================================

// const stopButton = document.getElementById("stopButton");
// const slowButton = document.getElementById("slowButton");
// const goButton = document.getElementById("goButton");

// const stopLight = document.getElementById("stopLight");
// const slowLight = document.getElementById("slowLight");
// const goLight = document.getElementById("goLight");


// stopButton.addEventListener('click', () => { 
//   // stopLight.classList.toggle('stop');                       // Shorter or alternate way to do the code without a conditional: From Danny's workshop
//   // console.log("click");
//   if(stopLight.style.background === 'black') {                 // if background is black, change the style to red.
//     stopLight.style.background = 'red';
//   } else { // if red change back to blck
//     stopLight.style.background = 'black';
//   }
// });

//     stopButton.addEventListener('mouseenter', () => {
//       console.log("Entered <textContent> button")
//     });

//     stopButton.addEventListener('mouseleave', () => {
//       console.log("Left <textContent> button")
//     });

// slowButton.addEventListener('click', () => { 
//   // stopLight.classList.toggle('slow'); //From Danny's workshop
//   // console.log("click");
//   if( slowLight.style.background === 'black') {
//     slowLight.style.background = 'yellow';
//   } else {
//     slowLight.style.background = 'black';
//   }
// });

//     slowButton.addEventListener('mouseenter', () => {
//       console.log("Entered <textContent> button")
//     });

//     slowButton.addEventListener('mouseleave', () => {
//       console.log("Left <textContent> button")
//     });

// goButton.addEventListener('click', () =>  { 
//   // stopLight.classList.toggle(''go'); //From Danny's workshop
//   // console.log("click");
//   if(goLight.style.background === 'black') {
//     goLight.style.background = 'green';
//   } else {
//     goLight.style.background = 'black';
//   }
// });

//     goButton.addEventListener('mouseenter', () => {
//       console.log("Entered <textContent> button")
//     });

//     goButton.addEventListener('mouseleave', () => {
//       console.log("Left <textContent> button")
//     });


// Second Attempt========================================================================================================================================================================

const stopButton = document.getElementById("stopButton");
const slowButton = document.getElementById("slowButton");
const goButton = document.getElementById("goButton");

const stopLight = document.getElementById("stopLight");
const slowLight = document.getElementById("slowLight");
const goLight = document.getElementById("goLight");

// Establish varibles equal to zero to use for conditional statement
let redLight = 0;
let yellowLight = 0;
let greenLight = 0;

stopButton.addEventListener('click', () => {                  // element.addEventListener(event, function())
  if(redLight % 2 === 0) {                                    // if varible is even, return red, if odd return black
    stopLight.style.backgroundColor = 'red';
      console.log('Bulb on');                                 // logged Bulb on, only to realize its not what the bonus question asked
  } else {
    stopLight.style.backgroundColor = 'black'
      console.log('Bulb off');                                // logged Bulb on, only to realize its not what the bonus question asked
  }
  redLight++;                                                 // Increment is needed to change the value of redLight from even to odd. Without it, the light will never change.
});

  // stopButton.addEventListener('click', () => {
  //     console.log()
  //   });

    stopButton.addEventListener('mouseEnter', () => {
      console.log("Entered <textContent> button")
    });

    stopButton.addEventListener('mouseLeave', () => {
      console.log("Left <textContent> button");
    });

slowButton.addEventListener('click', () => {
  if(yellowLight % 2 === 0) {
    slowLight.style.backgroundColor = 'yellow';
      console.log('Bulb on');
      } else {
        slowLight.style.backgroundColor = 'black'
          console.log('Bulb off');
      }
});

    slowButton.addEventListener('mouseenter', () => {
      console.log("Entered <textContent> button")
    });

    slowButton.addEventListener('mouseleave', () => {
      console.log("Left <textContent> button")
    });

goButton.addEventListener('click', () => {
  if(greenLight % 2 === 0) {
    goLight.style.backgroundColor = 'green';
       console.log('Bulb on');
        } else {
          goLight.style.backgroundColor = 'black'
            console.log('Bulb off');
          }
    });

    goButton.addEventListener('mouseenter', () => {
      console.log("Entered <textContent> button")
    });

    goButton.addEventListener('mouseleave', () => {
      console.log("Left <textContent> button")
    });