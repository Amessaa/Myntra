import React, { useState } from "react";
import { Heart, Send, Save } from "react-feather";
import { db } from "./firebase"; 
import { doc, updateDoc } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

const Modal = ({ closeModal, data }) => {
  const { id, imageUrl, inspiredBy, likes, shares, saves, createdBy } = data;
  const [localLikes, setLocalLikes] = useState(likes);
  const [localShares, setLocalShares] = useState(shares);
  const [localSaves, setLocalSaves] = useState(saves);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLike = async () => {
    if (!liked) {
      // Update local state
      setLocalLikes(prevLikes => prevLikes + 1);
      setLiked(true);

      // Update Firestore inspiration document
      await updateFirestore({ likes: localLikes + 1 });

      // Send notification to createdBy user
      const notificationMessage = `Amisha liked your inspiration!`;
      sendNotification(createdBy, notificationMessage);
    }
  };

  const handleShare = () => {
    // Update local state
    setLocalShares(prevShares => prevShares + 1);

    // Update Firestore inspiration document
    updateFirestore({ shares: localShares + 1 });
  };

  const handleSave = async () => {
    if (!saved) {
      // Update local state
      setLocalSaves(prevSaves => prevSaves + 1);
      setSaved(true);

      // Update Firestore inspiration document
      await updateFirestore({ saves: localSaves + 1 });
    }
  };

  const updateFirestore = async (updateData) => {
    try {
      await updateDoc(doc(db, "inspiration", id), updateData);
      console.log("Firestore updated successfully:", updateData);
    } catch (error) {
      console.error("Error updating Firestore:", error);
    }
  };

  const sendNotification = async (recipientUserId, message) => {
    try {
      // Add a notification to recipient's notifications collection
      const notificationsRef = collection(db, `users/${recipientUserId}/notifications`);
      await addDoc(notificationsRef, {
        message,
        timestamp: new Date(),
        read: false,
      });
      console.log("Notification sent successfully:", message);
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Inspiration Details</h2>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={imageUrl}
            alt="Inspiration"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">{inspiredBy}</h3>
            <div className="flex items-center justify-center space-x-4">
              <div
                className="flex items-center cursor-pointer"
                onClick={handleLike}
              >
                <Heart
                  className={`text-gray-600 ${
                    liked ? "text-pink-500" : "hover:text-pink-500"
                  }`}
                />
                <span className="ml-1">{localLikes}</span>
              </div>
              <div
                className="flex items-center cursor-pointer"
                onClick={handleShare}
              >
                <Send className="text-gray-600 hover:text-pink-500" />
                <span className="ml-1">{localShares}</span>
              </div>
              <div
                className="flex items-center cursor-pointer"
                onClick={handleSave}
              >
                <Save
                  className={`text-gray-600 ${
                    saved ? "text-pink-500" : "hover:text-pink-500"
                  }`}
                />
                <span className="ml-1">{localSaves}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
