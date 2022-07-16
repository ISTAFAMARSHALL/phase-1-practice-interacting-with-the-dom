document.addEventListener('DOMContentLoaded', () => {

    interval = setInterval(timer, 1000);
    plus.addEventListener('click', timer)
    minus.addEventListener('click', minusOne)
    pause.addEventListener('click', handlePause)
    heart.addEventListener('click', handlelikes)
    document.querySelector('#comment-input').addEventListener('submit', function(event) {event.preventDefault(), handleComments })

})


let int = 0;
let count = 0


function areRunning () {
   return pause.innerText === 'pause' ? true : false;

}


function timer() {

    if (areRunning () ) {

        counter.innerText = parseInt(counter.innerText) + 1;

    }
}

function minusOne() {

    if (areRunning () ) {

        counter.innerText = parseInt(counter.innerText) - 1;

    }
}

function handlePause() {

    pause.innerText = pause.innerText === 'pause' ? 'resume' : 'pause';
    plus.disabled = pause.innerText === 'resume' ? true : false;
    minus.disabled = pause.innerText === 'resume' ? true : false;
    heart.disabled = pause.innerText === 'resume' ? true : false;

}

function handlelikes() {

list.innerText = list.innerText + ` ${counter.innerText}  ❤️
`

    likes = list.innerText;
     
    for (const item of likes) {

        console.log(likes)

    } 
    
}

function handleComments() {

        console.log(document.querySelector('#comment-input'))
             
    
}