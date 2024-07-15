import React from "react";

export default function My_avataar() {
  return (
    <>
    <div className="bg-slate-400 h-full m-0">
      <h1 className="mx-6 pt-16 pb-10 text-5xl font-bold font-sans text-black/80" >YOUR AVATAARS</h1>
      <div className="grid grid-cols-2 gap-5 m-2 p-10 ">
        <img src="/images/createdAvataars/new_avataar.jpeg" className="w-full h-full rounded-xl border-4 border-white "/>
        <img src="/images/createdAvataars/avataar_2.jpeg" className="w-full h-full rounded-xl border-4 border-white "/>
        <img src="/images/createdAvataars/avataar_1.jpeg" className="w-full h-full rounded-xl border-4 border-white"/>
        {/* <img src="/images/createdAvataars/avataar_1.jpeg" className="w-full h-full rounded-xl border border-blue-700"/> */}
        {/* <img src="/images/createdAvataars/avataar_1.jpeg" className="w-full h-full rounded-xl border border-blue-700"/> */}
      </div>
    </div>
    </>
  );
}
