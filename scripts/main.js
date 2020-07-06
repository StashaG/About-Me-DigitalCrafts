let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/SSG profile pic.jpg') {
        myImage.setAttribute ('src', 'images/Graham Family pic.jpg');
    }else {
        myImage.setAttribute ('src', 'images/SSG profile pic.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Protect Your Dreams, ' + myName;
    }  
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Protect Your Dreams, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
    

