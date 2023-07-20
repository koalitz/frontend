import React, { useState } from 'react';
import Photo from './Photo';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  const handleAddPhoto = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setPhotos([...photos, event.target.result]);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1>Фотогалерея</h1>
      <input type="file" accept="image/*" onChange={handleAddPhoto} />
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <Photo key={index} src={photo} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;