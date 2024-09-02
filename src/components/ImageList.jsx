import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({images}){

    const renderedImages = images.map((image)=>{
        return <ImageShow image={image}/>
    })

    return (
        <div className="image-list-container">
            <div className="image-list">{renderedImages}</div>
        </div>


    )

}

export default ImageList;