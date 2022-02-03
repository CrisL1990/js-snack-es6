let squadre = [

    {
        nome : "squadra1",
        punti: 0,
        falli: 0
    },

    {
        nome : "squadra1",
        punti: 0,
        falli: 0
    },

    {
        nome : "squadra1",
        punti: 0,
        falli: 0
    },

    {
        nome : "squadra1",
        punti: 0,
        falli: 0
    }

]


let myList = []

for(let i = 0; i < squadre.length; i++){

    squadre[i].punti = randomNumber();
    squadre[i].falli = randomNumber();

    let {nome, falli} = squadre[i];

    myList.push(nome, falli);
}

function randomNumber(){
    let number = Math.floor(Math.random() * 50) + 1;
    return number;
}
console.log(myList);