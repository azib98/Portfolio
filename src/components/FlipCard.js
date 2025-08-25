import React from "react";

function FlipCard({ title, description, footer, images, handleOpenModal }) {
  return (
    <div className="flip-container flex-1 p-3 text-white d-flex justify-content-center align-items-center">
      <div className="flip-card text-white">
        <div className="flip-card-front heading d-flex flex-column justify-content-center align-items-center">
          <h4>{title}</h4>
          <p
            style={{
              fontSize: "0.8rem",
              textAlign: "center",
              marginTop: "0.5rem",
            }}
          >
            {description}
          </p>
          <div
            className="card-footer mt-2 text-center"
            style={{ fontSize: "0.7rem", color: "#ccc" }}
          >
            {footer}
          </div>
        </div>

        <div className="flip-card-back bg-dark d-flex justify-content-center align-items-center">
          <img
            src={images[0]}
            alt={`${title} Preview`}
            className="img-fluid"
            style={{ cursor: "pointer", maxHeight: "100%" }}
            onClick={() => handleOpenModal(images, title)}
          />
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
