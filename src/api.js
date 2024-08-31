import axios from "axios";


const searchImages = async ()=>{

    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
                Authorization:"Cliente-ID DK1aduZaXuIqg5AAjJVNkHWV1eWdORnvhfo5MZMWLCc"
        },        
                params:{
                    query:"Cats"
                }
    });

    console.log(response);


};

export default searchImages;

