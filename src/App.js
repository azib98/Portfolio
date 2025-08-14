import React, { useState } from "react";
import "@fontsource/roboto"; // Defaults to weight 400
import atelierP1 from "../src/assests/atelier360/1.png";
import atelierP2 from "../src/assests/atelier360/2.png";
import atelierP3 from "../src/assests/atelier360/3.png";
import atelierP4 from "../src/assests/atelier360/4.png";
import atelierP5 from "../src/assests/atelier360/5.png";
import atelierP6 from "../src/assests/atelier360/6.png";
import atelierP7 from "../src/assests/atelier360/7.png";
import atelierP8 from "../src/assests/atelier360/8.png";
import atelierP9 from "../src/assests/atelier360/9.png";
import atelierP10 from "../src/assests/atelier360/10.png";
import atelierP11 from "../src/assests/atelier360/11.png";
import tawakkalP1 from "../src/assests/tawakkal/1.png";
import tawakkalP2 from "../src/assests/tawakkal/2.png";
import tawakkalP3 from "../src/assests/tawakkal/3.png";
import tawakkalP4 from "../src/assests/tawakkal/4.png";
import tawakkalP5 from "../src/assests/tawakkal/5.png";
import tawakkalP6 from "../src/assests/tawakkal/6.png";
import tawakkalP7 from "../src/assests/tawakkal/7.png";
import tawakkalP8 from "../src/assests/tawakkal/8.png";
import tawakkalP9 from "../src/assests/tawakkal/9.png";
import tawakkalP10 from "../src/assests/tawakkal/10.png";
import tawakkalP11 from "../src/assests/tawakkal/11.png";
import greekP1 from "../src/assests/greektime/1.png";
import greekP2 from "../src/assests/greektime/2.png";
import greekP3 from "../src/assests/greektime/3.png";
import greekP4 from "../src/assests/greektime/4.png";
import greekP5 from "../src/assests/greektime/5.png";
import greekP6 from "../src/assests/greektime/6.png";
import greekP7 from "../src/assests/greektime/7.png";
import greekP8 from "../src/assests/greektime/8.png";
import greekP9 from "../src/assests/greektime/9.png";
import greekP10 from "../src/assests/greektime/10.png";
import greekP11 from "../src/assests/greektime/11.png";
import greekP12 from "../src/assests/greektime/12.png";
import abdulP1 from "../src/assests/abdul/1.png";
import abdulP2 from "../src/assests/abdul/2.png";
import abdulP3 from "../src/assests/abdul/3.png";
import abdulP4 from "../src/assests/abdul/4.png";
import abdulP5 from "../src/assests/abdul/5.png";
import abdulP6 from "../src/assests/abdul/6.png";
import abdulP7 from "../src/assests/abdul/7.png";
import abdulP8 from "../src/assests/abdul/8.png";
import abdulP9 from "../src/assests/abdul/9.png";
import abdulP10 from "../src/assests/abdul/10.png";
import abdulP11 from "../src/assests/abdul/11.png";
import abdulP12 from "../src/assests/abdul/12.png";
import markyP1 from "../src/assests/markytech/1.png";
import markyP2 from "../src/assests/markytech/2.png";
import markyP3 from "../src/assests/markytech/3.png";
import markyP4 from "../src/assests/markytech/4.png";
import markyP5 from "../src/assests/markytech/5.png";
import markyP6 from "../src/assests/markytech/6.png";
import "./App.css";
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
    <div className="d-flex flex-column vh-100 p-0 main">
      {/* First row */}
      <div className="d-flex flex-grow-1">
        {/* Card 1 */}
        <div className="flip-container flex-1 p-3 text-white d-flex justify-content-center align-items-center">
          <div className="flip-card text-white">
            <div className="flip-card-front heading d-flex flex-column justify-content-center align-items-center p-2">
              <h4>ATELIER 360</h4>
              <p
                style={{
                  fontSize: "1rem",
                  textAlign: "center",
                  marginTop: "0.5rem",
                }}
              >
                Responsive website showcasing architecture, interior, and
                landscape projects with interactive gallery.
              </p>
            </div>

            {/* Back */}
            <div className="flip-card-back bg-dark d-flex justify-content-center align-items-center">
              <img
                src={atelierP1}
                alt="Project Preview"
                className="img-fluid"
                style={{ cursor: "pointer", maxHeight: "100%" }}
                onClick={() =>
                  handleOpenModal(
                    [
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
                    ],
                    "ATELIER 360"
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flip-container flex-1 p-3 text-white d-flex justify-content-center align-items-center b-0">
          <div className="flip-card text-white">
            <div className="flip-card-front heading d-flex flex-column justify-content-center align-items-center p-2">
              <h4>TAWAKKAL LAPTOPS</h4>
              <p
                style={{
                  fontSize: "0.9rem",
                  textAlign: "center",
                  marginTop: "0.5rem",
                }}
              >
                Developed a website for laptop sales, enabling customers to
                browse products and make purchases through WhatsApp. Focused on
                user-friendly product filtering, smooth checkout, and secure
                payment integration.
              </p>
            </div>
            <div className="flip-card-back bg-dark">
              <img
                src={tawakkalP1}
                alt="Project Preview"
                className="img-fluid"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleOpenModal(
                    [
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
                    ],
                    "TAWAKKAL LAPTOPS"
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flip-container flex-1 p-3 text-white d-flex justify-content-center align-items-center">
          <div className="flip-card text-white">
            <div className="flip-card-front heading">DWANIQUE AUTO SALES</div>
            <div className="flip-card-back bg-dark">
              <img
                src={atelierP1}
                alt="Project Preview"
                className="img-fluid"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleOpenModal(
                    [atelierP1, atelierP2, atelierP3],
                    "DWANIQUE AUTO SALES"
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="d-flex flex-grow-1">
        {/* Card 4 */}
        <div className="flip-container flex-1 p-3 text-white d-flex justify-content-center align-items-center">
          <div className="flip-card text-white">
            <div className="flip-card-front heading">GREEK TIME</div>
            <div className="flip-card-back bg-dark">
              <img
                src={greekP1}
                alt="Project Preview"
                className="img-fluid"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleOpenModal(
                    [
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
                    ],
                    "GREEK TIME"
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flip-container flex-1 p-3 text-white d-flex justify-content-center align-items-center">
          <div className="flip-card text-white">
            <div className="flip-card-front heading">
              ABDUL SAMAD AL QURAISHI
            </div>
            <div className="flip-card-back bg-dark">
              <img
                src={abdulP1}
                alt="Project Preview"
                className="img-fluid"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleOpenModal(
                    [
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
                    ],
                    "ABDUL SAMAD AL QURAISHI"
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flip-container flex-1 p-3 text-white d-flex justify-content-center align-items-center">
          <div className="flip-card text-white">
            <div className="flip-card-front heading">MARKYTECH</div>
            <div className="flip-card-back bg-dark">
              <img
                src={markyP1}
                alt="Project Preview"
                className="img-fluid"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleOpenModal(
                    [markyP1, markyP2, markyP3, markyP4, markyP5, markyP6],
                    "MARKYTECH"
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <p className="mt-3">{modalDescription}</p>
        </Modal.Body>
      </Modal>

      <footer className="text-center py-2 text-dark footer">
        &copy; {new Date().getFullYear()} Azib Tanveer. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
