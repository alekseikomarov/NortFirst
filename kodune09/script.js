
let uudised = [
{
    pildiUrl: "Image@2x.png",
    pealkiri: "Esimene pommuudis",
    kirjeldus: "Lorem ipsum 1",
    viideUudisele: "href = uudis1.html"
},

{
    pildiUrl: "kaart.png",
    pealkiri: "Teine pommuudis",
    kirjeldus: "Lorem ipsum 2",
    viideUudisele: "href = uudis2.html"
},

{
    pildiUrl: "binokkel.png",
    pealkiri: "Kolmas pommuudis",
    kirjeldus: "Lorem ipsum 3",
    viideUudisele: "href = uudis3.html"
}
];

let uudisedElement = document.querySelector('.uudised');
for(let i = 0; i < uudised.length; i++) {
    let uudisElement = document.createElement('div');
    uudisElement.classList = ['uudis'];
    
        let pildiElement = document.createElement('img');
        pildiElement.src = uudised[i].pildiUrl;
        uudisElement.appendChild(pildiElement);

        let pealkirjaElement = document.createElement('h3');
        pealkirjaElement.innerHTML = uudised[i].pealkiri;
        uudisElement.appendChild(pealkirjaElement);

        let kirjelduseElement = document.createElement('p');
        kirjelduseElement.innerHTML = uudised[i].kirjeldus;
        uudisElement.appendChild(kirjelduseElement);

        let viideUudiseleElement = document.createElement('a');
       
        
        
    
    uudisedElement.appendChild(uudisElement);
}
