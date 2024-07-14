import React, { useState } from "react";
import Modal from "./Modal";
import InspirationItem from "./InspirationItem";
import { inspirationData } from "./utilities/data";

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div className="relative">
      <div className={`mx-auto text-center ${isModalOpen ? "blur-sm" : ""}`} style={{ minHeight: "150vh" }}>
        <div className="font-bold text-blue-600">
          <img className="w-full h-70" src="/images/product-header.jpg" alt="Product Header" />
        </div>
        <div className="justify-center bg-yellow-100/50 my-4">
          <div>
            <img className="w-full h-70" src="/images/product_body.jpg" alt="Product Footer" />
          </div>
        </div>
        <div className="overflow-x-auto whitespace-nowrap my-4 px-4">
          {inspirationData.map((item, index) => (
            <InspirationItem
              key={index}
              imageUrl={item.imageUrl}
              inspiredBy={item.inspiredBy}
              onClickExplore={() => openModal(item)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} data={modalData} />}
    </div>
  );
};

export default ProductPage;
