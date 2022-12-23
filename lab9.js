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