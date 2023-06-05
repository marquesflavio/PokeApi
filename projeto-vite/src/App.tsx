import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import axios from 'axios'

function App() {
  useEffect(()=> {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      //useEffect com o axios.get retorna uma Promise, ou seja, podemos usar async/await ou then/catch
      .then((res) => {
        console.log(res)
      })
      // .catch((err) => {
      //   console.log(err)
      // });
  })

  return (
    <>
      <Navbar/>
      <SearchBar/>
    </>
  )
}

export default App
