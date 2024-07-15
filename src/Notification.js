import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded shadow-lg flex items-center space-x-4">
      <p>{message}</p>
      <button onClick={onClose} className="text-red-500">
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default Notification;
