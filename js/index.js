window.onload = () => {
    document.querySelector('.start').addEventListener('click', startGame)
}
const startGame = () => {
    document.querySelector('.start').style.display = 'none'
    document.querySelector('.hero').style.display = 'none'
    document.querySelector('.counters').style.display = 'block'
    document.querySelector('canvas').style.display = 'block'
    game.init()
}