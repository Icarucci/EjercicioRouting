//npx create-react-app .     (pongo el . si quiero crearlo en la carpeta donde estoy parado, sino pongo el nombre de la carpeta que quiero crear)
//npm install axios
import SearchBar from "./components/SearchBar";
import SearchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";
import { Nav }  from "./components/NavBar/NavBar";
import { ItemListContainer }  from "./components/ItemListContainer";

function App(){
    
    const [img, setImg] = useState([]);

    const handleSubmit = async (term)=>{
        const resultado = await SearchImages(term);
        setImg(resultado);
    }
    
    return (
        <div>
            <Nav></Nav>
            <ItemListContainer greeting="¡Bienvenido a FCamisetas!"></ItemListContainer>
            <SearchBar enSubmit={handleSubmit}/>
            <ImageList images={img} />
        </div>
        
    ) 
   

} 

export default App;