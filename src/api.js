import axios from "axios";


const searchImages = async ()=>{

    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
                Authorization:"Client-ID DK1aduZaXuIqg5AAjJVNkHWV1eWdORnvhfo5MZMWLCc"
                
        },        
                params:{
                    query:"Soccer Sherseys"
                }
                
    });

    console.log(response.data.result);
    return response.data.results


};

export default searchImages;

