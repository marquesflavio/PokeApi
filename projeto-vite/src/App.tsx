import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import axios from 'axios'
import '../App.css'

function App() {

  interface Pokemon {
    name: string;
  }

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(()=> {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      //useEffect com o axios.get retorna uma Promise, ou seja, podemos usar async/await ou then/catch
      .then((res) => setPokemons(res.data.results))
      .catch((err) => {console.log(err)})
      
  }, []);

  
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <div className='lista-pokemon'>
        <ul>
          {pokemons && pokemons.map((pokemon) => <li key={pokemon.name}>{pokemon.name}</li>)}
        </ul>
      </div>
    </>
  );
}

export default App
