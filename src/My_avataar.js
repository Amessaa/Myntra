import React from "react";

export default function My_avataar() {
  return (
    <>
    <div className="bg-slate-500 h-full m-0">
      <h1 className="mx-6 pt-10 p-5 text-5xl font-bold font-sans text-black/70" >YOUR AVATAARS</h1>
      <div className="grid grid-cols-2 gap-5 m-4 p-2 ">
        <img src="/images/createdAvataars/new_avataar.jpeg" className="w-full h-full rounded-xl border border-blue-700 "/>
        <img src="/images/createdAvataars/avataar_2.jpeg" className="w-full h-full rounded-xl border border-blue-700 "/>
        <img src="/images/createdAvataars/avataar_1.jpeg" className="w-full h-full rounded-xl border border-blue-700"/>
        {/* <img src="/images/createdAvataars/avataar_1.jpeg" className="w-full h-full rounded-xl border border-blue-700"/> */}
        {/* <img src="/images/createdAvataars/avataar_1.jpeg" className="w-full h-full rounded-xl border border-blue-700"/> */}
      </div>
    </div>
    </>
  );
}
