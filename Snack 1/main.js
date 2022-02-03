
let bicicletta = [

    {
        nome : "bici1",
        peso : 30
    },

    {
        nome : "bici2",
        peso : 15
    },

    {
        nome : "bici3",
        peso : 8
    },

    {
        nome : "bici4",
        peso : 3
    }
]

let listaPesi = [];

for(let i = 0; i < bicicletta.length; i++){
    let {peso} = bicicletta[i];
    listaPesi.push(peso);
}

let pesoMaggiore = Math.max(...listaPesi);


console.log(pesoMaggiore);




