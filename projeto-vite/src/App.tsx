import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import axios from 'axios'

function App() {
  const [pokemons, setPokemons] = useState ([])

  useEffect(()=> {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      //useEffect com o axios.get retorna uma Promise, ou seja, podemos usar async/await ou then/catch
      .then((res) => setPokemons(res.data.results))
      .catch((err) => {console.log(err)})
      
  }, []);

  
  <ul>
    {pokemons && pokemons.map((pokemon) => <li key={pokemon}>{pokemon}</li>)}
  </ul>
  
  
  return (
    <>
      <Navbar/>
      <SearchBar/>
    </>
  );
}

export default App
