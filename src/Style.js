// StylePage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Style = () => {
  // State to manage selected images
  const [selectedImages, setSelectedImages] = useState([]);

  // Dummy image data (replace with your actual image data)
  const images = [
    { id: 1, url: 'image1.jpg' },
    { id: 2, url: 'image2.jpg' },
    { id: 3, url: 'image3.jpg' },
    { id: 4, url: 'image4.jpg' },
    { id: 5, url: 'image5.jpg' },
    { id: 6, url: 'image6.jpg' },
    { id: 7, url: 'image7.jpg' },
    { id: 8, url: 'image8.jpg' },
    // Add more images as needed
  ];

  // Function to toggle selection of an image
  const toggleSelection = (imageId) => {
    const isSelected = selectedImages.includes(imageId);
    if (isSelected) {
      setSelectedImages(selectedImages.filter(id => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select Items</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map(image => (
          <div key={image.id} className="relative">
            <img
              src={image.url}
              alt={`image ${image.id}`}
              className={`w-full rounded-lg ${selectedImages.includes(image.id) ? 'opacity-50' : ''}`}
              onClick={() => toggleSelection(image.id)}
            />
            {selectedImages.includes(image.id) && (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 20 20">
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/my_avatars" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Style</Link>
      </div>
    </div>
  );
};

export default Style;
