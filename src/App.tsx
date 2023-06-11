import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import axios from 'axios'
import './App.css'
import Footer from './components/Footer/Footer'
2
function App() {

  interface Pokemon {
    name: string;
    sprites: {
      front_default: string;
    }
  }

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  
 //useEffect com o axios.get retorna uma Promise, ou seja, podemos usar async/await ou then/catch 
 // nome do pokemon tá em data.name
 //imagem está em data.sprites.front_default
 

  useEffect(() => {
    const fetchPokemons = async () => {
      const promises = Array.from({ length: 151 }, (_, index) =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`)
      );

      try {
        const responses = await Promise.all(promises);
        const fetchedPokemons = responses.map((res) => {
          const data = res.data;
          const pokemon: Pokemon = {
            name: data.name,
            sprites: data.sprites
          };
          return pokemon;
        });
        setPokemons(fetchedPokemons);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemons();
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
      <Footer />
    </>
  );
}

export default App
