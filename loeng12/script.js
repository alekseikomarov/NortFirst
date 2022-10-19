const vastuseElement = document.querySelector('.vastus');

let liidetavad = [];
let viimatiVajutatiOperaatorit = false;

const vajutatiNuppu = (nupp) => {
    if(typeof nupp === 'number'){
        if(vastuseElement.innerHTML === '0' || viimatiVajutatiOperaatorit){
            vastuseElement.innerHTML = nupp;
        } else {
            vastuseElement.innerHTML += nupp;
        }
    }
    if(nupp === 'AC'){
        vastuseElement.innerHTML = 0;
    }
    if(nupp === '+'){
        liidetavad.push(vastuseElement.innerHTML);
        viimatiVajutatiOperaatorit = true;
    }
    if(nupp === '='){
        liidetavad.push(vastuseElement.innerHTML);
        viimatiVajutatiOperaatorit = true;
    }


}



document.addEventListener("keypress", function onEvent(event){
    if(event.key === '=') vajutatiNuppu('=');
    return
    if(event.key === '*') vajutatiNuppu('=');


});