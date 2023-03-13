import React from "react";

import "./ShareModal.css";

const ShareModal = ({ setOpenShareModal, title }) => {
  const url = ` https://www.movie.share.com/${title}`;
  return (
    <div className="overlay">
      <div className="ModalContainer">
        <button
          onClick={() => {
            setOpenShareModal(false);
          }}
          className="ModalClose_btn"
        >
          X
        </button>
        <h1 className="ModalHead" style={{ fontSize: "20px", font: "bold" }}>
          Share :
        </h1>
        <h1>{title}</h1>
        <div className="ModalBody">
          <></>
        </div>
        <div className="ModalFooter"></div>
      </div>
    </div>
  );
};

export default ShareModal;
