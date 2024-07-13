import React from "react";

export default function Home() {
  return (
    <div>
      <div className=" mx-auto justify-center text-center text-3xl">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="m-5 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="font-bold text-blue-600">
          <img className="w-full h-70" src="/images/home_header.jpeg" />
        </div>
        <div className="justify-center bg-yellow-100/50">
          <div>
            <img className="w-full h-70" src="/images/home_body.jpeg" />
          </div>
          <div className="justify-center p-2 px-2">
            <button className="p-4 mx-4 bg-pink-500/60 rounded-3xl font-semibold border-2 border-black">
              View More
            </button>
            <button className="p-4 mx-4x bg-pink-500/60 rounded-3xl font-semibold border-2 border-black">
              Style
            </button>
          </div>
        </div>
        <div className="justify-center">
          <img className="w-full h-30" src="/images/home_footer.jpeg" />
        </div>
      </div>
    </div>
  );
}
