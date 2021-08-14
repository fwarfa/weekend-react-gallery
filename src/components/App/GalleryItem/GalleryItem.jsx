import {useState} from 'react';

function GalleryItem ({onGetGallery, galleryList, likeButton}) {

    return (
        <>
            {galleryList.map(image => {
                return (

                    <div key= {image.id}>
                        <img src={image.path} alt={image.title} width="100" height="100"></img>
                        <button onClick={() => {likeButton(image.id)}}>Like</button>
                        <h4>{image.likes} People like this</h4>
                    </div>
                )
            })}
        </>
    );
}

export default GalleryItem;