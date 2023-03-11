import React from "react";

import "./ShareModal.css";

const ShareModal = ({ setOpenShareModal }) => {
  return (
    <div className="overlay">
      <div className="ModalContainer">
        <h1 className="ModalHead" style={{ fontSize: "20px" }}>
          Share The Movie
        </h1>
        <div className="ModalBody">
          <></>
          <button
            onClick={() => {
              setOpenShareModal(false);
            }}
            className="ModalClose_btn"
          >
            X
          </button>
        </div>
        <div className="ModalFooter"></div>
      </div>
    </div>
  );
};

export default ShareModal;
