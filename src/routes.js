import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./list";
import Home from "./Home";
import Productpage from "./Productpage";
import Style from "./Style";
import ViewMore from "./ViewMore";
import Orders from "./Orders";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/product" element={<Productpage />}></Route>
        <Route path="/style" element={<Style />}></Route>
        <Route path="/viewmore" element={<ViewMore />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
    </BrowserRouter>
  );
}