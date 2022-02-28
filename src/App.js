import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";
import Games from "./pages/games/games";
import Story from "./pages/story/story";
import Kratos from "./pages/kratos/kratos";
import Main from "./main/main";
import Error from "./error/error";
import gamesjson from "./pages/games/data.json";
import navjson from "./header/data.json";
import catjson from "./pages/catalog/data.json";
import Basket from "./pages/basket/Basket";
import Catalog from "./pages/catalog/Catalog";
import { useState } from "react";

export default function App() {
  const [catalogItems, setCatalogItems] = useState(catjson);

  return (
    <>
      <BrowserRouter>
        <Header json={navjson} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/games" element={<Games json={gamesjson} />} />
          <Route path="/story" element={<Story />} />
          <Route path="/kratos" element={<Kratos />} />
          <Route path="/basket" element={<Basket catalogItems={catalogItems} filteredCatalogItems={catalogItems.filter(({ basketCount }) => basketCount > 0)} setCatalogItems={setCatalogItems} />} />
          <Route path="/catalog" element={<Catalog catalogItems={catalogItems} setCatalogItems={setCatalogItems} />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
