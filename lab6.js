function setRussian() {
    let name = document.getElementById ('student'); 
    name.innerHTML = 'Виктория Жданова';

    let footer = document.getElementById ('footer'); 
    footer.innerHTML = 'Факультет бизнеса, ФБИ-01, 3 курс, 2022';

    document.getElementById ('your-name').innerHTML = 'Ваше имя';
    document.getElementById ('input-name').placeholder = 'введите имя';

    document.getElementById ('your-surname').innerHTML = 'Ваша фамилия';
    document.getElementById ('input-surname').placeholder = 'введите фамилию';

    document.getElementById ('your-age').innerHTML = 'Ваш возраст';
    document.getElementById ('input-age').placeholder = 'введите возраст';

    document.getElementById ('ok-button').value = 'ок';

    document.getElementById ('reset-button').value = 'сброс';
}

function setEnglish() {
    let name = document.getElementById ('student'); 
    name.innerHTML = 'Victoria Zhdanova';

    let footer = document.getElementById ('footer'); 
    footer.innerHTML = 'Faculity of Bussines, FBI-01, 3rd year, 2022';

    document.getElementById ('your-name').innerHTML = 'Your name';
    document.getElementById ('input-name').placeholder = 'enter your name';

    document.getElementById ('your-surname').innerHTML = 'Your surname';
    document.getElementById ('input-surname').placeholder = 'enter your surname';
    
    document.getElementById ('your-age').innerHTML = 'Your age';
    document.getElementById ('input-age').placeholder = 'enter your age';

    document.getElementById ('ok-button').value = 'ok';

    document.getElementById ('reset-button').value = 'reset';
}

function showAlert () {
    let userName = document.getElementById ('input-name').value;
    let userSurname = document.getElementById ('input-surname').value;
    let userAge = document.getElementById ('input-age').value;
    alert('Привет, ' + userName + ' ' + userSurname + '\n' + 'Ваш возраст: ' + userAge);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById ('user-data').style.backgroundColor = color;
}

function Studname () {
    let studentName = document.getElementById ('student').innerHTML;
    alert('Работу выполнил:' + ' ' + studentName);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById ('student').style.backgroundColor = color;
}
function infooter () {
    let footer = document.getElementById('footer').innerHTML;
    alert('Факультет, группа, курс, год:' + footer);
    document.getElementById ('student').style.backgroundColor = blue;
}


