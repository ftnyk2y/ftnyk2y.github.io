let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/othello-icon.png') {
        myImage.setAttribute ('src','images/shakespeare-icon.jpg');
    } else {
        myImage.setAttribute ('src','images/othello-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name',myName);
    myHeading.innerHTML = myName + 'さん、<br>オセロの葉へようこそ';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = storedName + 'さん、<br>オセロの葉へようこそ';
}
myButton.onclick = function() {
    setUserName();
}