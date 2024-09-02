import "./ImageShow.css";

function ImageShow({image}){

    const precio = (Math.random() * (20000 - 3000) + 3000).toFixed(2);

    return (
        <div className="card">
            <img src={image.urls.small} alt="foto" />
            <p className="card-precio">$ {precio}</p>
            <p className="card-text">{image.alt_description}</p>
            <a href={image.links.download} className="card-link">Comprar</a>
        </div>
    )

}

export default ImageShow;