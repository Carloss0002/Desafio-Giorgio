let clickCount = document.getElementById('number')
let btn = document.getElementById('btn')
let timesClicked = 0

clickCount.innerHTML = timesClicked

btn.addEventListener('click', ()=>{
    timesClicked++
    clickCount.innerHTML = timesClicked
})