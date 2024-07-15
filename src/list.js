import React from "react";
import { useNavigate } from "react-router-dom";

export default function List() {
  const navigate = useNavigate();
  return (
    <div >
      <img src="/images/listl.jpg"  className="w-full"/>
      <button
        onClick={()=>{navigate('/product')}}
        className="absolute top-0 left-0 w-full h-full opacity-0"
        aria-label="Navigate to products"
      />
    </div>
  );
}
