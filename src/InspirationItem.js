import React from "react";


const InspirationItem = ({ imageUrl, inspiredBy,likes,shares,saves, onClickExplore }) => {
  const handleExploreClick = () => {
    onClickExplore && onClickExplore({imageUrl,likes,shares,saves});
  };

  return (
    <div className="inline-block mr-4">
      <img className="w-40 h-40 rounded-md" src={imageUrl}  />
      <div className="text-sm text-gray-600">
      <span style={{ display: "block" }}>Inspired By</span>
        <span style={{ display: "block",fontSize:20, fontWeight: "bold", color: "black",fontStyle:"-moz-initial"}}>{inspiredBy}</span>
        

      </div>
      {onClickExplore && (
        <button className="bg-pink-500 text-white px-2 py-1 mt-2 rounded" onClick={handleExploreClick}>
          Explore
        </button>
      )}
    </div>
  );
};

export default InspirationItem;
