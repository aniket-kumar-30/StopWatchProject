// Declaring interval variable globally to get the instance of setInterval globally.
let interval;

const nextMin = document.getElementById('nextMinute');
const nextSec = document.getElementById('nextSecond');
// Get minute and second span tag to display minute and second.
const currMin = document.getElementById('currentMinute');
const currSec = document.getElementById('currentSecond');
// Declaring second and minute counter variable globally.
let secCounter = 0;
let minCounter = 0;
currMin.textContent = minCounter.toString().padStart(2,'0');
currSec.textContent = secCounter.toString().padStart(2,'0');

// Event delegation for btn click
document.addEventListener('click',function(e){
    if(e.target.parentElement.id == 'start-btn'){
        interval = setInterval(startWatch,1000);
    }else if(e.target.parentElement.id == 'stop-btn'){
        clearInterval(interval);
        return;
    }else if(e.target.parentElement.id == 'reset-btn'){
        secCounter = 0;
        minCounter = 0;
        currMin.textContent = minCounter.toString().padStart(2,'0');
        currSec.textContent = secCounter.toString().padStart(2,'0');
        clearInterval(interval);
    }
})
function startWatch(){
    if(secCounter >= 59){
        secCounter = 0;
        minCounter++;
        nextMin.innerHTML = minCounter.toString().padStart(2,'0');
        nextMin.classList.add('animate');
        setTimeout(function(){
            nextMin.classList.remove('animate');
            currMin.innerHTML = nextMin.textContent;
        },500)

    }else{
        secCounter++;
        nextSec.innerHTML = secCounter.toString().padStart(2,'0');
        nextSec.classList.add('animate');
        setTimeout(function(){
            nextSec.classList.remove('animate');
            currSec.innerHTML = nextSec.textContent;
        },800)
    }
}

function stopWatch(){}

function resetWatch(){}

// Event Listener to listen start btn click.
// startBtn.addEventListener('click',function(){
//     /* Set Interval to increase the minute and second counter after every 100ms and callback
//         function to increase and display minute and second 
//     */
//     interval = setInterval(function(){
//         if(secCounter >= 59){
//             secCounter = 0;
//             minCounter++;
//             nextMin.innerHTML = minCounter.toString().padStart(2,'0');
//             nextMin.classList.add('animate');
//             setTimeout(function(){
//                 nextMin.classList.remove('animate');
//                 currMin.innerHTML = nextMin.textContent;
//             },500)

//         }else{
//             secCounter++;
//             nextSec.innerHTML = secCounter.toString().padStart(2,'0');
//             nextSec.classList.add('animate');
//             setTimeout(function(){
//                 nextSec.classList.remove('animate');
//                 currSec.innerHTML = nextSec.textContent;
//             },800)
//         }
//     },1000);
// })
// // Event Listener to listen stop btn click and callback function to clear setInterval.
// stopBtn.addEventListener('click',function(){
//     clearInterval(interval);
//     return;
// })
// // EventListener to listen reset btn click and reset minute and second counter to 00:00
// resetBtn.addEventListener('click',function(){
//     secCounter = 0;
//     minCounter = 0;
//     currMin.textContent = minCounter.toString().padStart(2,'0');
//     currSec.textContent = secCounter.toString().padStart(2,'0');
//     clearInterval(interval);
// })

