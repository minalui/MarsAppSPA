interface Image {
    "sol": number,
    "image_src": string,
    "earth_date": string,
}

const ImageGallery = (images:Image[]) => {
    return (
        <ul>
            {images.map((image) => (<li><img src={image.image_src}/></li>))}
        </ul>
    )
}

export default ImageGallery;