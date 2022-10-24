let vastuseElement = document.querySelector('.vastus');

let liidetavad = [];
let viimatiVajutatiOperaatorit = false;
let viimatiPluss = false;
let viimatiMiinus = false;
let viimatiKorrutis = false;
let viimatiJagatis = false;
let viimatiVordne = false;

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
        viimatiJagatis = false;
        viimatiKorrutis = false;
        viimatiMiinus = false;
        viimatiPluss = false;
        viimatiVordne = false;
    }

    if((nupp === '+') & (!viimatiVordne)){
        liidetavad.push(vastuseElement.innerHTML);
        console.log(liidetavad);
        viimatiVajutatiOperaatorit = true;
        viimatiPluss = true;
        viimatiMiinus = false;
        viimatiKorrutis = false;
        viimatiJagatis = false;

        console.log('saadame Pluss');
        console.log(liidetavad);
            let vastusJson = await fetch('http://localhost:3000/liida', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(liidetavad)
            })
            const vastus = await vastusJson.json();
            vastuseElement.innerHTML = vastus.vastus;
            liidetavad.push(vastuseElement.innerHTML);
            liidetavad.splice(0, (liidetavad.length - 1));  
    }
    if((nupp === '+') & (viimatiVordne)){
        viimatiVajutatiOperaatorit = true;
        liidetavad.push(vastuseElement.innerHTML);
        viimatiVordne = false;
        liidetavad.splice(0, (liidetavad.length - 1));
        viimatiPluss = true;
        viimatiMiinus = false;
        viimatiKorrutis = false;
        viimatiJagatis = false;
    }

    if((nupp === '-') & (!viimatiVordne)){
        liidetavad.push(vastuseElement.innerHTML);
        console.log(liidetavad);
        viimatiVajutatiOperaatorit = true;
        viimatiPluss = false;
        viimatiMiinus = true;
        viimatiKorrutis = false;
        viimatiJagatis = false;

            console.log('saadame Miinus');
            console.log(liidetavad);
        let vastusJson = await fetch('http://localhost:3000/lahuta', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(liidetavad)
        })
        const vastus = await vastusJson.json();
        vastuseElement.innerHTML = vastus.vastus;
        liidetavad.push(vastuseElement.innerHTML);
        liidetavad.splice(0, (liidetavad.length - 1));
    }
    if((nupp === '-') & (viimatiVordne)){
        viimatiVajutatiOperaatorit = true;
        liidetavad.push(vastuseElement.innerHTML);
        viimatiVordne = false;
        liidetavad.splice(0, (liidetavad.length - 1));
        viimatiPluss = false;
        viimatiMiinus = true;
        viimatiKorrutis = false;
        viimatiJagatis = false;
    }

    if((nupp === 'x') & (!viimatiVordne)){
        liidetavad.push(vastuseElement.innerHTML);
        console.log(liidetavad);
        viimatiVajutatiOperaatorit = true;
        viimatiKorrutis = true;
        viimatiMiinus = false;
        viimatiJagatis = false;
        viimatiPluss = false;

                console.log('saadame Korrutis');
                console.log(liidetavad);
            let vastusJson = await fetch('http://localhost:3000/korruta', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(liidetavad)
            })
            const vastus = await vastusJson.json();
            vastuseElement.innerHTML = vastus.vastus;
            liidetavad.push(vastuseElement.innerHTML);
            liidetavad.splice(0, (liidetavad.length - 1));
    }
    if((nupp === 'x') & (viimatiVordne)){
        viimatiVajutatiOperaatorit = true;
        liidetavad.push(vastuseElement.innerHTML);
        viimatiVordne = false;
        liidetavad.splice(0, (liidetavad.length - 1));
        viimatiKorrutis = true;
        viimatiMiinus = false;
        viimatiJagatis = false;
        viimatiPluss = false;
    }

    if((nupp === '/') & (!viimatiVordne)){
        liidetavad.push(vastuseElement.innerHTML);
        console.log(liidetavad);
        viimatiVajutatiOperaatorit = true;
        viimatiKorrutis = false;
        viimatiMiinus = false;
        viimatiJagatis = true;
        viimatiPluss = false;

                console.log('saadame Jagatis');
                console.log(liidetavad);
            let vastusJson = await fetch('http://localhost:3000/jaga', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(liidetavad)
            })
            const vastus = await vastusJson.json();
            vastuseElement.innerHTML = vastus.vastus;
            liidetavad.push(vastuseElement.innerHTML);
            liidetavad.splice(0, (liidetavad.length - 1));
    }
    if((nupp === '/') & (viimatiVordne)){
        viimatiVajutatiOperaatorit = true;
        liidetavad.push(vastuseElement.innerHTML);
        viimatiVordne = false;
        liidetavad.splice(0, (liidetavad.length - 1));
        viimatiKorrutis = false;
        viimatiMiinus = false;
        viimatiJagatis = true;
        viimatiPluss = false;
    }

    if(nupp === '='){
        liidetavad.push(vastuseElement.innerHTML);
        viimatiVordne = true;
       
        if(liidetavad.length > 2){
            liidetavad.splice(0, (liidetavad.length - 2));
        }
        
        if(viimatiMiinus){
            console.log('saadame Miinus');
            console.log(liidetavad);
            const vastusJson = await fetch('http://localhost:3000/lahuta', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(liidetavad)
            })
            const vastus = await vastusJson.json();
            vastuseElement.innerHTML = vastus.vastus;
            return;
            }
        
        if(viimatiPluss){
            console.log('saadame Pluss');
            console.log(liidetavad);
            const vastusJson = await fetch('http://localhost:3000/liida', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(liidetavad)
            })
            const vastus = await vastusJson.json();
            vastuseElement.innerHTML = vastus.vastus;
            return;
            } 
        
        if(viimatiKorrutis){
            console.log('saadame Korrutis');
            console.log(liidetavad);
            const vastusJson = await fetch('http://localhost:3000/korruta', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(liidetavad)
            })
            const vastus = await vastusJson.json();
            vastuseElement.innerHTML = vastus.vastus;
            return;
            } 

        if(viimatiJagatis){
            console.log('saadame Jagatis');
            console.log(liidetavad);
            const vastusJson = await fetch('http://localhost:3000/jaga', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(liidetavad)
            })
            const vastus = await vastusJson.json();
            vastuseElement.innerHTML = vastus.vastus;
            return;
            }}}

document.addEventListener("keypress", function onEvent(event){
   if(event.key === '/') {
        vajutatiNuppu('/');
        return;
   }

   if(event.key === '=') {
    vajutatiNuppu('=');
    return;
}
   if(event.key === '+') {
    vajutatiNuppu('+');
    return;
    }
    if(event.key === '-') {
        vajutatiNuppu('-');
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