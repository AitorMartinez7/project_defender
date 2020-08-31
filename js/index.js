window.onload = () => {
    document.querySelector('.start').addEventListener('click', startGame)
}
const startGame = () => {
    document.querySelector('.start').style.display = 'none'
    document.querySelector('.hero').style.display = 'none'
    document.querySelector('.board').style.display = 'flex'
    document.querySelector('.counters').style.display = 'block'
    document.querySelector('canvas').style.display = 'block'
    const theme = document.createElement('embed')
    document.querySelector('.board').appendChild(theme)
    theme.setAttribute("src", "/bso/gameTheme.mp3")
    theme.setAttribute("loop", true)
    theme.setAttribute("autostart", true)
    game.init()
}

const retry = document.querySelector('#retry')
const play = document.querySelector('#play')

// retry.onclick = () => {
//     document.querySelector('.bad-ending').style.display = 'none'
//     document.querySelector('.board').style.display = 'flex'
//     game.init()
// }

// play.onclick = () => {
//     document.querySelector('.good-ending').style.display = 'none'
//     document.querySelector('.start').style.display = 'block'
//     document.querySelector('.hero').style.display = 'block'
//     game.init()
// }