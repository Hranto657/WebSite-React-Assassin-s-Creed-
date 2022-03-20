import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/header";
import Games from "./pages/games/games";
import Story from "./pages/story/story";
import Persons from "./pages/Persons/Persons";
import Main from "./main/main";
import Error from "./error/error";
import gamesjson from "./pages/games/data.json";
import catjson from "./pages/catalog/data.json";
import Basket from "./pages/basket/Basket";
import Catalog from "./pages/catalog/Catalog";
import { useState } from "react";
import ModalLog from "./header/Registration/ModalLog/ModalLog";
import ModalReg from "./header/Registration/ModalReg/ModalReg";


export default function App() {
  const [catalogItems, setCatalogItems] = useState(catjson);

  const [modalActiveLog, setModalActiveLog] = useState(false);
  const [modalActiveReg, setModalActiveReg] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header
          setActiveLog={setModalActiveLog}
          setActiveReg={setModalActiveReg}
        />
        {modalActiveLog && (
          <ModalLog
            activeLog={modalActiveLog}
            setActiveLog={setModalActiveLog}
          />
        )}
        {modalActiveReg && (
          <ModalReg
            activeReg={modalActiveReg}
            setActiveReg={setModalActiveReg}
          />
        )}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/games" element={<Games json={gamesjson} />} />
          <Route path="/story" element={<Story />} />
          <Route path="/persons" element={<Persons />} />
          <Route
            path="/basket"
            element={
              <Basket
                catalogItems={catalogItems}
                filteredCatalogItems={catalogItems.filter(
                  ({ basketCount }) => basketCount > 0
                )}
                setCatalogItems={setCatalogItems}
              />
            }
          />
          <Route
            path="/catalog"
            element={
              <Catalog
                catalogItems={catalogItems}
                setCatalogItems={setCatalogItems}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
