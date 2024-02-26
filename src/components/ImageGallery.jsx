import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ image, isLoading, handleShowModal }) => {
  const imageMassive = image.map((images) => (
    <ImageGalleryItem
      handleShowModal={handleShowModal}
      isLoading={isLoading}
      key={images.id}
      {...images}
    />
  ));
  return (
    <>
      <ul class="ImageGallery">{imageMassive}</ul>
    </>
  );
};

export default ImageGallery;
