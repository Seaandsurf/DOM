const getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
const _initTime = Date.now()

function randomRGB() {
    return Math.floor(Math.random() * 257);
}
document.body.addEventListener('keydown', function (event) {
    const body = document.body;
    if (event.code === "Space") {

        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);

        const randRGB = `rgb(${r}, ${g}, ${b})`;
        body.style.backgroundColor = randRGB;
        const newlog = document.createElement('li')
        newlog.innerText = getElapsedTime()
        logList.appendChild(newlog)
    }
})

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















