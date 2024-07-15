import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import InspirationItem from "./InspirationItem";
import { db, storage } from "./firebase"; 
import { getDocs, collection, query, orderBy } from "firebase/firestore"; 
import { getDownloadURL, ref } from "firebase/storage"; 

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [inspirationData, setInspirationData] = useState([]);

  useEffect(() => {
    const fetchInspirationData = async () => {
      try {
        const q = query(collection(db, "inspiration"), orderBy('shares', 'desc'), orderBy('saves', 'desc'),orderBy('likes', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = await Promise.all(querySnapshot.docs.map(async (doc) => {
          const docData = doc.data();
          const imageUrl = await getDownloadURL(ref(storage, docData.imageUrl));
          return {
            id: doc.id,
            ...docData,
            imageUrl
          };
        }));
        setInspirationData(data);
      } catch (error) {
        console.error("Error fetching inspiration data:", error);
      }
    };

    fetchInspirationData();
  }, []);

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
            <img className="w-full h-70" src="/images/product_body.jpg" alt="Product Body" />
          </div>
        </div>
        <div className="overflow-x-auto whitespace-nowrap my-4 px-4">
          {inspirationData.map((item) => (
            <InspirationItem
              key={item.id}
              imageUrl={item.imageUrl}
              inspiredBy={item.inspiredBy}
              likes={item.likes}
              shares={item.shares}
              saves={item.saves}
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
