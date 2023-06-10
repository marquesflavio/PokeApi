import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import axios from 'axios'
import './App.css'

function App() {

  interface Pokemon {
    name: string;
    sprites: {
      front_default: string;
    }
  }

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(()=> {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/54/')
      //useEffect com o axios.get retorna uma Promise, ou seja, podemos usar async/await ou then/catch
      .then((res) => {
        const data = res.data;
        const pokemon: Pokemon = {
          name: data.name,
          sprites: data.sprites
        };
      setPokemons([pokemon]);
      })
      // nome do pokemon tá em data.name
      //imagem está em data.sprites.front_default
      .catch((err) => {console.log(err)})  
  }, []);

  
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <div className='lista-pokemon'>
        <ul>
          {pokemons.map((pokemon) =>
            <li key={pokemon.name}>
              <p>{pokemon.name}</p>
              <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </li>)}
        </ul>
      </div>
    </>
  );
}

export default App
