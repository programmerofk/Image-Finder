import React from "react";
import Loader from "./Loader/Loader";

const ImageGalleryItem = ({
  id,
  webformatURL,
  isLoading,
  handleShowModal,
  largeImageURL,
}) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => handleShowModal(largeImageURL)}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <img className="ImageGalleryItemImage" src={webformatURL} alt="photo" />
      )}
    </li>
  );
};

export default ImageGalleryItem;
