// get prompt sync
const prompt = require('prompt-sync')();
// set up pokecenter
let pokeCenter = [{
    name: 'Charmander', type: 'fire', pokedexnum: 4},
{   name: 'Bulbasaur', type: 'grass', pokedexnum: 1},
{   name: 'Squirtle', type: 'water', pokedexnum: 7},
{   name: 'Pikachu', type: 'electric', pokedexnum: 25},
{   name: 'Pidgey', type: 'flying', pokedexnum: 16},
{   name: 'Rattata', type: 'normal', pokedexnum: 19},
{   name: 'Caterpie', type: 'bug', pokedexnum: 10},
];
// set up backpack
let backpack = [
    {
    name: 'Weedle', type: 'bug', pokedexnum: 13},
{   name: 'Ekans', type: 'poison', pokedexnum: 023}
]


//Check Backpack and PokeCenter
function checkPokemon() {
    console.log('\nPokeCenter: ')
    for (let index = 0; index <pokeCenter.length; index++) {
        console.log(`\nSlot Number : ${index +1}`) // prints index point + 1
        console.log(`Name: ${pokeCenter[index].name} | Type: ${pokeCenter[index].type} | PokeDex#: ${pokeCenter[index].pokedexnum}`)
    }
    console.log('\nBACKPACK: ')
    for (let index = 0; index <backpack.length; index++) {
        console.log(`\nSlot Number : ${index +1}`) // prints index point + 1
        console.log(`Name: ${backpack[index].name} | Type: ${backpack[index].type} | PokeDex#: ${backpack[index].pokedexnum}`)
    }
}
//Searches pokemon index number
function findPokemon(pokemon) {
        index = -1;
        for (let i =0; i <backpack.length; i++) {
            if (backpack[i].name === (pokemon)) {
                index = i;
                let pokeChoice = index
                console.log(pokeChoice)
            }
        }
}
// add pokemon to be healed - if there are more than 8 pokemon, it will not let you as it is full.
function healPokemon(pokemon) { 
    if (pokeCenter.length >=8) {
        console.log('\nThe PokeCenter is full. Take out a healed Pokemon first.');
    } else {
        value = pokemon - 1;
        pokeCenter.push(backpack[value]);
        backpack.splice([value], 1);
    }
}
// reverse of healpokemon, takes from pokecenter and places in backpack
function takePokemon(pokemon) { 
        value = pokemon - 1;
        backpack.push(pokeCenter[value]);
        pokeCenter.splice([value], 1);
    }

//while state to run program
let state = true;
while (state) {
    console.log('\nPress A to heal a pokemon\nPress T to take back a healed pokemon\n Press D to display all pokemon\nPress Q to quit')
    let functionChoice = prompt('Select an option: ')
    functionChoice = functionChoice.toUpperCase()
    if (functionChoice ==='A') {
        value = prompt('Enter a pokemon from your backpack: ')
        healPokemon(value);
    } else if (functionChoice === 'T') {
        value = prompt('Enter a pokemon to add to your backpack: ')
        takePokemon(value);
    } else if (functionChoice === 'D'){
        checkPokemon();
    } else if (functionChoice === 'Q'){
        state = false;
    } else {
        console.log('\nSorry, please try again!')
    }

}

