const cellItem = document.querySelectorAll('.cell')
const resetBtn = document.querySelector('.game__button-btn')
const statusGame = document.querySelector('.game__status-turn')

playing = true
player = 'O'
cells = []
statusGame.innerText = player

cellItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        // console.log(item);
        playerHandler(index)
    })
    cells[index] = {
        element: item,
        value: null,
        reset() {
            this.element.classList.remove(this.value)
            this.value = null
        }
    }
})

function playerHandler(index) {
    if (playing && cells[index].value == null) {
        cells[index].value = player
        cells[index].element.classList.add(player)
        togglePlayer()
        checkWinner()
    }
}

function togglePlayer() {
    player = player == 'O' ? 'X' : 'O';
    statusGame.innerText = player
}

function checkWinner() {
    let winner = false
    if (cells[0].value !== null && cells[0].value == cells[1].value
        && cells[0].value == cells[2].value) winner = cells[0].value
    else if (cells[3].value !== null && cells[3].value == cells[4].value
        && cells[3].value == cells[5].value) winner = cells[3].value
    else if (cells[6].value !== null && cells[6].value == cells[7].value
        && cells[6].value == cells[8].value) winner = cells[6].value
    else if (cells[0].value !== null && cells[0].value == cells[3].value
        && cells[0].value == cells[6].value) winner = cells[0].value
    else if (cells[1].value !== null && cells[1].value == cells[4].value
        && cells[1].value == cells[7].value) winner = cells[1].value
    else if (cells[2].value !== null && cells[2].value == cells[5].value
        && cells[2].value == cells[8].value) winner = cells[2].value
    else if (cells[0].value !== null && cells[0].value == cells[4].value
        && cells[0].value == cells[8].value) winner = cells[0].value
    else if (cells[2].value !== null && cells[2].value == cells[4].value
        && cells[2].value == cells[6].value) winner = cells[2].value
    if (winner) {
        playing = false
        resetBtn.classList.add('show')
        statusGame.innerText = `Winner ${winner}`
        resetBtn.addEventListener('click', resetGame)
    } else if (cells[0].value !== null && cells[1].value !== null
        && cells[2].value !== null && cells[3].value !== null && cells[4].value !== null
        && cells[5].value !== null && cells[6].value !== null && cells[7].value !== null
        && cells[8].value !== null
    ) {
        playing = false
        resetBtn.classList.add('show')
        statusGame.innerText = "Without winner"
        resetBtn.addEventListener('click', resetGame)
    }

}

function resetGame() {
    playing = true
    resetBtn.classList.remove('show')
    player = player == 'O' ? 'X' : 'O'
    statusGame.innerText = player
    cells.forEach(item => item.reset())
}

