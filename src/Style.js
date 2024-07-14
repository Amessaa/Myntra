import React, { useState } from "react";
import { Link } from "react-router-dom";

const Style = () => {
  // State to manage selected images
  const [selectedImages, setSelectedImages] = useState([]);

  // Dummy image data (replace with your actual image data)
  const images = [
    { id: 1, url: "/images/style/blue_top.jpeg" },
    { id: 2, url: "/images/style/lavender_top.jpeg" },
    { id: 4, url: "/images/style/skirt.jpeg" },
    { id: 5, url: "/images/style/trowsers.jpeg" },
    // Add more images as needed
  ];

  // Function to toggle selection of an image
  const toggleSelection = (imageId) => {
    const isSelected = selectedImages.includes(imageId);
    if (isSelected) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  return (
    <div className="m-0 p-4 bg-slate-500 overflow-scroll h-full">
      <h1 className="text-6xl font-bold font-sans m-4 text-black/70"> STYLE</h1>
      <h1 className="my-10 text-xl font-semibold font-serif m-4 text-black/70">CREATE YOUR OWN AVATAARS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.url}
              alt={`image ${image.id}`}
              className={`w-full rounded-lg ${
                selectedImages.includes(image.id) ? "opacity-50" : ""
              }`}
              onClick={() => toggleSelection(image.id)}
            />
            {selectedImages.includes(image.id) && (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to="/my_avatars"
          className="m-2 bg-pink-500/70 hover:bg-pink-600/80 text-white py-3 px-4 rounded-lg"
        >
          CREATE YOUR AVATAR
        </Link>
      </div>
    </div>
  );
};

export default Style;
