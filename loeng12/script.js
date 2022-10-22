let vastuseElement = document.querySelector('.vastus');

let liidetavad = [];
let viimatiVajutatiOperaatorit = false;

const vajutatiNuppu = async (nupp) => {
    if(typeof nupp === 'number'){
        if(vastuseElement.innerHTML === '0' || viimatiVajutatiOperaatorit){
            vastuseElement.innerHTML = nupp;
        } else {
            vastuseElement.innerHTML += nupp;
        }
        viimatiVajutatiOperaatorit = false;
    }

    if(nupp === 'AC'){
        vastuseElement.innerHTML = 0;
        liidetavad = [];
        viimatiVajutatiOperaatorit = false;
    }
    if(nupp === '+'){
        liidetavad.push(vastuseElement.innerHTML);
        viimatiVajutatiOperaatorit = true;
    }
    if(nupp === '='){
        liidetavad.push(vastuseElement.innerHTML);
        viimatiVajutatiOperaatorit = true;
        console.log('saadame vastuse');
        const vastusJson = await fetch('http://localhost:3000/liida', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(liidetavad)
        })
        const vastus = await vastusJson.json();
        vastuseElement.innerHTML = vastus.vastus;
    }


}

document.addEventListener("keypress", function onEvent(event){
   if(event.key === '=') {
        vajutatiNuppu('=');
        return;
   }
   if(event.key === '*'){
        vajutatiNuppu('x');
        return;
   }
   if(!isNaN(event.key)){
        vajutatiNuppu(parseInt(event.key));
        return;
   }
   console.log(event.key);
   console.log(typeof event.key);
   vajutatiNuppu(event.key);
});

document.onkeydown = function(evt){
    evt = evt || window.event;
    var isEscape = false;
    if("key" in evt){
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    }
    if(isEscape){
        vajutatiNuppu('AC')
    }
};