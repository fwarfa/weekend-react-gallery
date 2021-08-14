import React from 'react';
import './App.css';
import GalleryList from './GalleryList/GalleryList';
import GalleryItem from './GalleryItem/GalleryItem';
import axios from 'axios';
import {useState, useEffect} from 'react';


function App() {

  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    axios.get('/gallery')
      .then(response => {
        console.log('GET /gallery', response.data);

        setGalleryList(response.data);
      }).catch(error => {
        console.log('GET /gallery error', error);
      });
  };

  const likeButton = (id) => {
    console.log('id is ', id);
    axios.put(`/gallery/like/${id}`)
      .then(response => {
        console.log('PUT /like', response.data);
        getGallery();
      }).catch(error => {
        console.log('PUT /like error', error);
      });
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        < GalleryList 
            galleryList = {galleryList}
            onGetGallery = {getGallery}
            likeButton = {likeButton}
        />
      </div>
    );
}

export default App;
