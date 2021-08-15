import {useState} from 'react';

function GalleryItem ({onGetGallery, galleryList, likeButton}) {

    const handleClick = (id) => {

        let galleryImage = document.getElementById(id);
        let imgDescription = document.getElementById(id);
    
        if (galleryImage.style.visibility === "visible") {
            galleryImage.style.visibility = "hidden";
            imgDescription.style.visibility = "visible";
            console.log('you clicked a description!');

        } else {
            galleryImage.style.visibility = "visible";
            imgDescription.style.visibility = "hidden";
            console.log('you clicked an image!');
        }

    }

    return (
        <>
            {galleryList.map(image => {
                return (

                    <div key= {image.id}>
                        <img src={image.path} 
                            alt={image.title} 
                            width="100" 
                            height="100"
                            id={image.id}
                            onClick ={() => {handleClick(image.id)}}
                        />
                        <br/>
                        <span id={image.id}
                        onClick ={() => {handleClick(image.id)}}
                        >{image.description}</span>
                        <br/>
                        <button onClick={() => {likeButton(image.id)}}>Like</button>
                        <h4>{image.likes} People like this</h4>
                    </div>
                )
            })}
        </>
    );
}

export default GalleryItem;