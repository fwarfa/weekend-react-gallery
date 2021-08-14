import {useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({onGetGallery, galleryList, likeButton}) {


    return (
        <>
            <h1>My Gallery</h1>
            <div>
                < GalleryItem 
                    galleryList = {galleryList}
                    onGetGallery = {onGetGallery}
                    likeButton = {likeButton}
                />
            </div>

        </>
    );
}

export default GalleryList;