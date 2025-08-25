import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState("");

  const handleOpenModal = (images, title) => {
    setCurrentImages(images);
    setModalTitle(title);
    setCurrentIndex(0);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/portfolio"
          element={
            <Portfolio
              handleOpenModal={handleOpenModal}
              showModal={showModal}
              currentImages={currentImages}
              currentIndex={currentIndex}
              handleCloseModal={handleCloseModal}
              modalTitle={modalTitle}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
