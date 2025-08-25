import React, { useState } from "react";
import FlipCard from "../components/FlipCard"; // adjust path if needed
import "@fontsource/roboto"; // Defaults to weight 400
import atelierP1 from "../assests/atelier360/1.png";
import atelierP2 from "../assests/atelier360/2.png";
import atelierP3 from "../assests/atelier360/3.png";
import atelierP4 from "../assests/atelier360/4.png";
import atelierP5 from "../assests/atelier360/5.png";
import atelierP6 from "../assests/atelier360/6.png";
import atelierP7 from "../assests/atelier360/7.png";
import atelierP8 from "../assests/atelier360/8.png";
import atelierP9 from "../assests/atelier360/9.png";
import atelierP10 from "../assests/atelier360/10.png";
import atelierP11 from "../assests/atelier360/11.png";

import tawakkalP1 from "../assests/tawakkal/1.png";
import tawakkalP2 from "../assests/tawakkal/2.png";
import tawakkalP3 from "../assests/tawakkal/3.png";
import tawakkalP4 from "../assests/tawakkal/4.png";
import tawakkalP5 from "../assests/tawakkal/5.png";
import tawakkalP6 from "../assests/tawakkal/6.png";
import tawakkalP7 from "../assests/tawakkal/7.png";
import tawakkalP8 from "../assests/tawakkal/8.png";
import tawakkalP9 from "../assests/tawakkal/9.png";
import tawakkalP10 from "../assests/tawakkal/10.png";
import tawakkalP11 from "../assests/tawakkal/11.png";

import dwanique1 from "../assests/dwanique/1.png";
import dwanique2 from "../assests/dwanique/2.png";
import dwanique3 from "../assests/dwanique/3.png";
import dwanique4 from "../assests/dwanique/4.png";
import dwanique5 from "../assests/dwanique/5.png";
import dwanique6 from "../assests/dwanique/6.png";
import dwanique7 from "../assests/dwanique/7.png";
import dwanique8 from "../assests/dwanique/8.png";
import dwanique9 from "../assests/dwanique/9.png";
import dwanique10 from "../assests/dwanique/10.png";

import greekP1 from "../assests/greektime/1.png";
import greekP2 from "../assests/greektime/2.png";
import greekP3 from "../assests/greektime/3.png";
import greekP4 from "../assests/greektime/4.png";
import greekP5 from "../assests/greektime/5.png";
import greekP6 from "../assests/greektime/6.png";
import greekP7 from "../assests/greektime/7.png";
import greekP8 from "../assests/greektime/8.png";
import greekP9 from "../assests/greektime/9.png";
import greekP10 from "../assests/greektime/10.png";
import greekP11 from "../assests/greektime/11.png";
import greekP12 from "../assests/greektime/12.png";

import abdulP1 from "../assests/abdul/1.png";
import abdulP2 from "../assests/abdul/2.png";
import abdulP3 from "../assests/abdul/3.png";
import abdulP4 from "../assests/abdul/4.png";
import abdulP5 from "../assests/abdul/5.png";
import abdulP6 from "../assests/abdul/6.png";
import abdulP7 from "../assests/abdul/7.png";
import abdulP8 from "../assests/abdul/8.png";
import abdulP9 from "../assests/abdul/9.png";
import abdulP10 from "../assests/abdul/10.png";
import abdulP11 from "../assests/abdul/11.png";
import abdulP12 from "../assests/abdul/12.png";

import markyP1 from "../assests/markytech/1.png";
import markyP2 from "../assests/markytech/2.png";
import markyP3 from "../assests/markytech/3.png";
import markyP4 from "../assests/markytech/4.png";
import markyP5 from "../assests/markytech/5.png";
import markyP6 from "../assests/markytech/6.png";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal } from "react-bootstrap";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const handleOpenModal = (images, title) => {
    setCurrentImages(images);
    setModalTitle(title);
    setCurrentIndex(0);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    // Inside App() return

    <div className="d-flex flex-column vh-100 p-0 main">
      {/* First row */}
      <div className="d-flex flex-grow-1">
        <FlipCard
          title="ATELIER 360"
          description="Responsive website showcasing architecture, interior, and landscape projects with interactive gallery."
          footer="Web Development | WordPress | Responsive Design"
          images={[
            atelierP1,
            atelierP2,
            atelierP3,
            atelierP4,
            atelierP5,
            atelierP6,
            atelierP7,
            atelierP8,
            atelierP9,
            atelierP10,
            atelierP11,
          ]}
          handleOpenModal={handleOpenModal}
        />
        <FlipCard
          title="TAWAKKAL LAPTOPS"
          description="WordPress website for selling new and used laptops with filters and smooth browsing experience."
          footer="Web Development | WordPress | E-commerce"
          images={[
            tawakkalP1,
            tawakkalP2,
            tawakkalP3,
            tawakkalP4,
            tawakkalP5,
            tawakkalP6,
            tawakkalP7,
            tawakkalP8,
            tawakkalP9,
            tawakkalP10,
            tawakkalP11,
          ]}
          handleOpenModal={handleOpenModal}
        />
        <FlipCard
          title="DWANIQUE AUTO SALES"
          description="Car selling platform with React, TypeScript, Laravel, and MySQL backend. Smooth search and filter features."
          footer="Web Development | React | Typescript | MySQL | SCSS"
          images={[
            dwanique1,
            dwanique2,
            dwanique3,
            dwanique4,
            dwanique5,
            dwanique6,
            dwanique7,
            dwanique8,
            dwanique9,
            dwanique10,
          ]}
          handleOpenModal={handleOpenModal}
        />
      </div>

      {/* Second row */}
      <div className="d-flex flex-grow-1">
        <FlipCard
          title="GREEK TIME"
          description="Responsive WordPress website for a Greek restaurant with online menu and ordering functionality."
          footer="Web Development | WordPress | Plugins | Ordering"
          images={[
            greekP1,
            greekP2,
            greekP3,
            greekP4,
            greekP5,
            greekP6,
            greekP7,
            greekP8,
            greekP9,
            greekP10,
            greekP11,
            greekP12,
          ]}
          handleOpenModal={handleOpenModal}
        />
        <FlipCard
          title="ABDUL SAMAD AL QURAISHI"
          description="WordPress website for a luxury perfume brand with catalog management, filtering, and mobile responsiveness."
          footer="Web Development | WordPress | Plugins | E-Commerce"
          images={[
            abdulP1,
            abdulP2,
            abdulP3,
            abdulP4,
            abdulP5,
            abdulP6,
            abdulP7,
            abdulP8,
            abdulP9,
            abdulP10,
            abdulP11,
            abdulP12,
          ]}
          handleOpenModal={handleOpenModal}
        />
        <FlipCard
          title="MARKYTECH"
          description="Company portfolio website built with a custom WordPress theme, responsive design, and performance optimization."
          footer="Web Development | WordPress | Custom Theme | Portfolio"
          images={[markyP1, markyP2, markyP3, markyP4, markyP5, markyP6]}
          handleOpenModal={handleOpenModal}
        />
      </div>

      <Modal show={showModal} onHide={handleCloseModal} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentImages.length > 0 && (
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              arrows={false}
              slidesToShow={1}
              slidesToScroll={1}
              initialSlide={currentIndex}
              afterChange={(index) => setCurrentIndex(index)}
            >
              {currentImages.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={`slide-${idx}`} className="img-fluid" />
                </div>
              ))}
            </Slider>
          )}
          <p className="mt-3">{modalDescription}</p>
        </Modal.Body>
      </Modal>
      <footer>sadasdsdad</footer>
    </div>
  );
}

export default App;
