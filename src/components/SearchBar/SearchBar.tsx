import { useState } from "react";
import './SearchBar.css';

const SearchBar = () =>{
    const [search, setSearch] = useState ("");

    const searchPokemon = (e: any) =>{
        setSearch(e.target.value)
        
    };

    const onButtonClick = () =>{

        console.log(search)
    }

    return(
        <div className="searchbar">
            <input 
                autoFocus value={search} 
                placeholder="Procurar pokémons" 
                onChange={searchPokemon}>    
            </input>
        
            <button onClick={onButtonClick}>Pesquisar</button>
        </div>

    )
}

export default SearchBar