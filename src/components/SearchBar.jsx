import { useState } from "react";
import "./SearchBar.css";


function SearchBar({enSubmit}){
    
    const [term, setTerm] = useState("");

    function handleForSubmit(event){
        event.preventDefault();
        enSubmit(term);
    }

    function handleChange(event){
        setTerm(event.target.value);
    }

    return(
        <div className="search-bar">
            <form onSubmit={handleForSubmit}>
                <label>Ingrese término de búsqueda</label>
                <input value={term} type="text" onChange={handleChange} />
            </form>
        </div>
    )


}

export default SearchBar;