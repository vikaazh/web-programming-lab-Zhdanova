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
    if (button.innerHTML == 'Нажми меня')
        button.innerHTML = 'Ещё раз нажми';
    else if (button.innerHTML == 'Ещё раз нажми')
        button.innerHTML = 'Ещё';
    else if (button.innerHTML == 'Ещё')
        button.innerHTML = 'Начать сначала';
    else
        button.innerHTML = 'Нажми меня';  
}