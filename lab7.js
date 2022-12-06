function showAlert () {
    let userName = document.getElementById ('input-name').value;
    let userSurname = document.getElementById ('input-surname').value;
    let userAge = document.getElementById ('input-age').value;
    let userSex = document.getElementById ('sex').value;

    let greeting;
    if (userAge <= 17) {
        greeting='Здравствуй, ';
        if (userSex == 'female') {
            greeting += 'девочка ';
        }
        else {
            greeting += 'мальчик ';
        }
    }
    else {
        greeting='Здравствуйте, ';
        if(userSex == 'female') {
            greeting += 'госпожа ';
        }
        else {
            greeting += 'господин ';
        }
    }
    alert(greeting + userName + ' ' + userSurname + '\n'
    + 'Ваш возраст: '+ userAge);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById ('user-data').style.backgroundColor = color;
}
function makeStairs () {
    let stairs = document.querySelector ('#stairs');
    let stepCount = 20;
    for (let i = 0; i<stepCount; i++) {
        stairs.innerHTML += '<div class="step"></div>';
    }
    let steps = document.querySelectorAll ('.step');
    for (let i = 0; i<steps.length; i++) {
        steps [i].style.left = (30 + 10*i) + 'px';
        steps [i].style.top = (300 + 80*i) + 'px';
        steps [i].innerHTML = 'Блок номер ' + Number(i+1);
    }
}
function makeSnowfall () {
    let Snowfall = document.querySelector ('#Snowfall');
    let stepCount = 30;
    for (let i = 0; i<stepCount; i++) {
        Snowfall.innerHTML += '<img class= "Snowfall" src="1pic.png">';
    }
    let PictureSnow= document.images;
    for (let i=0; i<Snowfall.length;i++){
        PictureSnow [i]. style.left = Math.random()*window.innerWidth + 'px';
        PictureSnow [i]. style.top = Math.random()*window.innerHeight + 'px';
        PictureSnow [i]. style.width = Math.random()*100 + 'px';
    }
}
function ALLFunction() {
makeStairs();
makeSnowfall();
}