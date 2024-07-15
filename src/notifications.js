import React from "react";

export default function Notifications() {
  const notifications = {
    saves: 10,
    likes: 25,
    shares: 5,
  };
  return (
    <div className="bg-black/80">
      <div className="pt-10 text-5xl font-sans font-bold text-gray-200 px-6">
        NOTIFICATIONS
      </div>
      <div className="mt-10">
        <div className="grid grid-flow-row gap-0  ">
          <div className="p-4 border-y-4 border-gray-500 h-24 text-white text-lg font-mono">
            Your recent Avataar got 253 likes and shares!!
          </div>
          <div className="p-4 border-y-4 border-gray-500 h-24 text-white text-lg font-mono">
            Your have been awarded with 100 myntra coins 🎉🎉
          </div>
          <div className="p-4 border-y-4 border-gray-500 h-24 text-white text-lg font-mono">
            Your order has been dispatched 
          </div>
          <div className="p-4 border-y-4 border-gray-500 h-24 text-white text-lg font-mono">
            Don't forget to claim your rewards
          </div>
          <div className="p-4 border-y-4 border-gray-500 h-24 text-white text-lg font-mono">
            Your first Avataar got 15 likes.
          </div>
          <div className="p-4 border-y-4 border-gray-500 h-24 text-white text-lg font-mono">
            Use your myntra points to avail offers on your favorite fashion brands.
          </div>
          <div className="p-4 border-y-4 border-gray-500 h-24 text-white text-lg font-mono">
            Your recieved 10 myntra points for your first avataar.
          </div>
        </div>
      </div>
    </div>
  );
}
