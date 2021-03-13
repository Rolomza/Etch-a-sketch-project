const gridContainer = document.querySelector('.grid-container')
const newGridButton = document.getElementById('new-grid')
const cleanGridButton = document.getElementById('clean-grid')

const randomNumber = (n) => {
    return Math.round(Math.random() * n)
}

const randomColor = () => {
    let r = randomNumber(255)
    let g = randomNumber(255)
    let b = randomNumber(255)
    return `rgb(${r},${g},${b})`
}

const createGrid = (n) => {
    let square
    gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`
    for(let i = 0; i< Math.pow(n,2); i++) {
        square = document.createElement('div')
        square.classList.add('square')
        document.querySelector('.grid-container').appendChild(square)
    }  
}


const eliminador = () => {
    while(gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

const painting = (e) => {
    e.target.style.background = randomColor()
}
const newGrid = (n) => {
    eliminador()
    createGrid(n)
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => square.addEventListener('mouseover', painting))
}

const changeGrid = () => {
    let userInput = Number(prompt('Enter new size (1-50)'))
    newGrid(userInput)
}

const cleanGrid = () => {
    gridContainer.childNodes.forEach(element => {
        element.style.background = 'white'
    })
}


newGrid(3)
newGridButton.addEventListener('click', changeGrid)
cleanGridButton.addEventListener('click', cleanGrid)
