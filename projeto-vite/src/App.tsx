import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import axios from 'axios'
import './App.css'
2
function App() {

  interface Pokemon {
    name: string;
    imagem: string;
  }

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(()=> {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      //useEffect com o axios.get retorna uma Promise, ou seja, podemos usar async/await ou then/catch
      .then((res) => setPokemons(res.data.results))
      .catch((err) => {console.log(err)})
      
  }, []);

  // useEffect(()=>{
  //   axios
  //     .get('https://pokeapi.glitch.me/v1')
  //     .then((res) => console.log(res))
  // },[])
   
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <div className='lista-pokemon'>
        <ul>
          {pokemons && pokemons.map((pokemon) => <li key={pokemon.name}><p>{pokemon.name}</p><img src={pokemon.imagem}/></li>)}
        </ul>
      </div>
    </>
  );
}

export default App
