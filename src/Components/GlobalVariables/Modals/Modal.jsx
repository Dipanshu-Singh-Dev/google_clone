import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal/ImageModal";
import ProductModal from "./ProductModal/ProductModal";
import styles from "./Modal.module.css";
import modalVariants from "./ModalVariants";
import VideoModal from "./VideoModal/VideoModal";
import NewsModal from "./NewsModal/NewsModal";
const Modal = ({ handleClose, target, type }) => {
  console.log(handleClose, target, type);
  let currentModal;
  React.useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  });
  if (type === "image") {
    currentModal = (
      <ImageModal handleClose={handleClose} target={target} type={type} />
    );
  } else if (type === "product")
    currentModal = (
      <ProductModal handleClose={handleClose} target={target} type={type} />
    );
  else if (type === "video")
    currentModal = (
      <VideoModal handleClose={handleClose} target={target} type={type} />
    );
  else if (type === "news")
    currentModal = (
      <NewsModal handleClose={handleClose} target={target} type={type} />
    );
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <>{currentModal}</>,
        document.querySelector("body")
      )}
    </React.Fragment>
  );
};

export default Modal;
