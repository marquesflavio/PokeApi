import axios from "axios"

axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')

    .then((result) => {
        console.log(result)

    }).catch((err) => {
        console.log(err)
    });