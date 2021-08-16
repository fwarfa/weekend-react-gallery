import {useState} from 'react';

function GalleryItem ({onGetGallery, galleryList, likeButton, image}) {

    let [showDescription, setShowDiscription] = useState(true);

    const handleClick = () => {
        setShowDiscription(!showDescription);
    }

    return (
        <>
            {
                showDescription ? 
                    <div key= {image.id}>
                        <img src={image.path} 
                            alt={image.title} 
                            id={image.id}
                            width="100" 
                            height="100"
                            onClick ={() => {handleClick()}}
                        />
                    </div>
                    :
                    <div 
                        id={image.id}
                        onClick ={() => {handleClick()}}
                    >{image.description}
                    </div>
            }
            <button onClick={() => {likeButton(image.id)}}>Like</button>
            <h4>{image.likes} People like this</h4>
        </>
    );
}

export default GalleryItem;