
// class Pokemon {
//     constructor(pokemonName,ability,moveOne,moveTwo,moveThree,moveFour,moveFive,speed,specialDefense,specialAttack,defense,attack,hp){
//         this.pokemonName = pokemonName;
//         this.ability = ability;
//         this.moveOne = moveOne;
//         this.moveTwo = moveTwo;
//         this.moveThree = moveThree;
//         this.moveFour = moveFour;
//         this.moveFive = moveFive;
//         this.speed = speed;
//         this.specialAttack = specialAttack;
//         this.specialDefense = specialDefense;
//         this.defense = defense;
//         this.attack = attack;
//         this.hp = hp;
        
//     }
// }
// let pokemon = {
//     pokemonName: undefined,
//     ability: undefined

// }
let pokemons = {};

async function fetchingDataAndCheck(){
    const url = `https://pokeapi.co/api/v2/pokemon/`
    const response = await fetch(url)
    const data = await response.json()
    const result = data.results;
    // proverka za ability 1 is hidden
    for( let i = 0; i < result.length; i++ ){
        fetch(result[i].url)
        .then((responseLoop) => responseLoop.json())
        .then((dataLoop)=> isNotHidden(dataLoop))

        function isNotHidden(d){
            if(!d.abilities[0].is_hidden === false){
                console.log(`asd`)
            }else{
                fetchingName(result[i])
                console.log(result[i])
            }
        }
    }
        
   
}

function fetchingName(checkedDataFromLoop){
    // console.log(checkedDataFromLoop.name)
    pokemonName = "asd"
    
    let ability;
    let moves = {};
    let stats = {}
    // console.log(x.url)
    fetch(checkedDataFromLoop.url)
    .then ((response) => response.json())
    .then((data) =>collectingAllData(data))
    function collectingAllData(z){
        ability = z.abilities[0].ability.name
        // console.log(ability)
        
        let moves = {
            'move1': '',
            'move2': '',
            'move3': '',
            'move4': '',            
        }
        
        for( let i = 0 ; i < 4; i++){
            moves[`move${i+1}`] = z.moves[i].move.name;
        }
        // console.log(z.moves[0].move)
        // console.log(moves)
        // console.log(z.stats)
        z.stats.forEach(element => {
            stats[element.stat.name]= Number(element.base_stat)
           
        });
        // console.log(stats)
    // console.log(z)
    //(z[0].ability) .name .url
    // console.log(z.moves)
    // console.log(z.abilities[0].ability.name)
    // console.log(z.abilities[0].is_hidden)
    // console.log(moves)
    // let newPokemon = new Pokemon(pokemonName,ability,moves.move1,moves.move2,moves.move3,moves.move4,stats.speed,stats['special-defense'],stats['special-attack'],stats.defense,stats.attack,stats.hp)
        

    
        
    // console.log(Pokemon.arguments)
    
    }    
    pokemons = {
        'Name': 'yrdy',
        'Ability': ability,
        'Move 1': moves.move1,
        'Move 2': moves.move2,
        'Move 3': moves.move3,
        'Move 4': moves.move4,
        'Speed': stats.speed,
    
    
    }
    console.log(pokemons)
}





fetchingDataAndCheck()