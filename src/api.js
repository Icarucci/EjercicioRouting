import axios from "axios";


const searchImages = async ()=>{

    const response = await axios.get("http://api.unsplash.com/search/photos",{
        headers:{
                Authorization:"Cliente-ID OASdHVc5ogoJOYyFQCyqMe8-kRBgj_qsbQEn0T4k-j4"
        },        
                params:{
                    query:"Cats"
                }
    });

    console.log(response);


};

export default searchImages;

