import React, { useState, useEffect } from "react";
import { Heart, Send, Save } from "react-feather";

const Modal = ({ closeModal, data }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [shared, setShared] = useState(0);
  const [saved, setSaved] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);
  const [copyLinkMessage, setCopyLinkMessage] = useState("");

  useEffect(() => {
    if (data) {
      setLikes(data.likes);
      setShared(data.shares);
      setSaved(data.saves);
    }
  }, [data]);

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const toggleShareDropdown = () => {
    setIsShareDropdownOpen(!isShareDropdownOpen);
  };

  const handleSaveClick = () => {
    if (!isSaved) {
      setSaved(saved + 1);
      setIsSaved(true);
    }
  };

  const handleShareClick = () => {
    setShared(shared + 1);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("http://localhost:3004/product").then(() => {
      setCopyLinkMessage("Link copied!");
      setTimeout(() => {
        setCopyLinkMessage("");
      }, 2000); // Clear message after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg text-center">
        {data && (
          <>
            <img src={data.imageUrl} alt={data.inspiredBy} className="w-full mb-4" />
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <span className="mr-2">{likes}</span>
                <button onClick={handleLikeClick} className="text-2xl">
                  <Heart className={`w-6 h-6 ${isLiked ? "text-pink-500 fill-current" : "text-black"}`} />
                </button>
              </div>
              <div className="flex items-center relative">
                <span className="mr-2">{saved}</span>
                <button onClick={handleSaveClick} className="text-2xl">
                  <Save className={`w-6 h-6 ${isSaved ? "text-pink-500 fill-current" : "text-black"}`} />
                </button>
              </div>
              <div className="flex items-center relative">
                <span className="mr-2">{shared}</span>
                <button onClick={toggleShareDropdown} className="text-2xl">
                  <Send className={`w-6 h-6 text-black`} />
                </button>
                {isShareDropdownOpen && (
                  <div className="absolute left-0 top-10 bg-white p-2 shadow-lg rounded-lg">
                    <button onClick={handleShareClick} className="px-2 py-1 bg-blue-500 text-white mb-1 block w-full rounded">
                      Share
                    </button>
                    <button onClick={handleCopyLink} className="px-2 py-1 bg-gray-200 text-black block w-full rounded">
                      Copy Link
                    </button>
                    {copyLinkMessage && (
                      <p className="text-green-500 mt-2">{copyLinkMessage}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        <button onClick={closeModal} className="mt-4 p-2 bg-pink-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
