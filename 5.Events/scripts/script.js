// document.getElementById("myBtn").addEventListener("click", displayDate);
// displayDate(event){console.log(event}
// document.getElementById("myBtn").addEventListener("click", displayDate);

const getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
const _initTime = Date.now()

// ------------------------------------------------------------------
// ------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {

// ------------------------------------------------------------------
// 3 manières de pour random color background
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// Manière 1
// ------------------------------------------------------------------
//     const randomColor = () => {
//         const r = Math.floor(Math.random() * 255);
//         const g = Math.floor(Math.random() * 255);
//         const b = Math.floor(Math.random() * 255);
//         return `rgb(${r}, ${g}, ${b})`;
//     }

// ------------------------------------------------------------------
// Manière 2
// ------------------------------------------------------------------
// if (!paragraph.classList.length) {
//     let randomColor = () => Math.floor(Math.random() * 256);
//    paragraph.style.color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
//   }

// ------------------------------------------------------------------
// Manière 3
// ------------------------------------------------------------------
//   const randomColor = '#' + Math.floor(Math.random() * 256);
// section.style.backgroundcolor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()}`



    const logList = document.querySelector('ul')
    const actionSquareWrapper = document.querySelector('.displayedsquare-wrapper')
    function duplicateButton(color) {

        const newlog = document.createElement('li')
        newlog.innerText = getElapsedTime()
        logList.appendChild(newlog)
        const newButton = document.createElement('div')
        newButton.classList.add('displayedsquare', color)
        actionSquareWrapper.appendChild(newButton)
    }
    const actionSquares = document.querySelectorAll('.actionsquare')
    for (let actionSquare of actionSquares) {

        actionSquare.addEventListener('click', function (e) {

            const color = e.target.classList[1]
            duplicateButton(color)
        })
    }
    const randbckgrnd = document.querySelector('body')
    randomColor.appendChild(randbckgrnd)



})








