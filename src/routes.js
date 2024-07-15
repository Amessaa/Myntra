import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./list";
import Home from "./Home";
import Productpage from "./Productpage";
import Style from "./Style";
import ViewMore from "./ViewMore";
import Orders from "./Orders";
import My_avataar from "./My_avataar";
import Notifications from "./notifications";

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
        <Route path="/my_avatars" element={<My_avataar />}></Route>
        <Route path="/notifications" element={<Notifications/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
