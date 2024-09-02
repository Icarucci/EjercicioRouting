//npx create-react-app .     (pongo el . si quiero crearlo en la carpeta donde estoy parado, sino pongo el nombre de la carpeta que quiero crear)
//npm install axios
import SearchBar from "./components/SearchBar";
import SearchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App(){
    
    const [img, setImg] = useState([]);

    const handleSubmit = async (term)=>{
        const resultado = await SearchImages(term);
        setImg(resultado);
    }
    
    return (
        <div>
            <h1>Ejercicio Api con libreria Axios y SearchBar </h1>
            <SearchBar enSubmit={handleSubmit}/>
            <ImageList images={img} />
        </div>
        
    ) 
   

} 

export default App;