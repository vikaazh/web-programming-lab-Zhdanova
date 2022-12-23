function clickMe(button) {
    if (button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';  
}
function studentName(button) {
    if (button.innerHTML == 'Виктория')
        button.innerHTML = 'Жданова';
    else
        button.innerHTML = 'Виктория';  
}
function condition(button) {
    if (button.innerHTML == 'Нажми меня') {
        button.innerHTML = 'Ещё раз нажми';
        button.style.color = 'blue'
    }
    else if (button.innerHTML == 'Ещё раз нажми') {
        button.innerHTML = 'Ещё';
        button.style.color = 'purple'
    }
    else if (button.innerHTML == 'Ещё'){
        button.innerHTML = 'Начать сначала';
        button.style.color = 'green'
    }
    else {
        button.innerHTML = 'Нажми меня';
        button.style.color = 'pink'
    }
}
function showCoords(event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY + ' ' + 
    (event.ctrlKey? '<b>Ctrl</b>': '<s>Ctrl</s>') + ' ' + (event.shiftKey? '<b>Shift</b>': '<s>Shift</s>')+ ' ' + (event.altKey? '<b>Alt</b>': '<s>Alt</s>');
}
window.addEventListener('DOMContentLoaded', function () {
    let coords = document.querySelector ('#coords');
    coords.addEventListener('mousemove', showCoords);
});

function showFocus(event) {
    event.target.style.color = 'yellow'
}
function showBlur(event) {
    event.target.style.color = 'black'
}

window.addEventListener('DOMContentLoaded', function () {
    let texts = document.querySelectorAll ('input[type = "text"]');
    texts [0]. addEventListener('focus', showFocus);
    texts [1]. addEventListener('focus', showFocus);
    texts [2]. addEventListener('focus', showFocus);
    texts [0]. addEventListener('blur', showBlur);
    texts [1]. addEventListener('blur', showBlur);
    texts [2]. addEventListener('blur', showBlur);
});