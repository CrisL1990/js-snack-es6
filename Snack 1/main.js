
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
        peso : 2
    },

    {
        nome : "bici4",
        peso : 3
    }
];

let biciLeggera = bicicletta[0];

for (let i = 0; i < bicicletta.length; i++){

    if(bicicletta[i].peso < biciLeggera.peso){
        biciLeggera = bicicletta[i];
    }
   
}


console.log(`La bici più leggera è ${biciLeggera.nome} e il suo peso è ${biciLeggera.peso} kg`);




