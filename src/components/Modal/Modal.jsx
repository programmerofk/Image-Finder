import React from "react";

const Modal = ({ largeImageURL, closeShowModal }) => {
  return (
    <div class="Overlay">
      <div class="Modal">
        <button className="closeButton" onClick={closeShowModal}>
          {" "}
          X{" "}
        </button>
        <img src={largeImageURL} alt="Large Image" />
      </div>
    </div>
  );
};

export default Modal;
