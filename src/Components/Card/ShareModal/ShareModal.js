import React from "react";
import { Button } from "semantic-ui-react";
import "./ShareModal.css";

const ShareModal = ({ setOpenShareModal }) => {
  return (
    <div className="overlay">
      <div className="ModalContainer">
        <div className="ModalHead">Share The Movie</div>
        <div className="ModalBody"></div>
        <div className="ModalFooter">
          <Button
            onClick={() => {
              setOpenShareModal(false);
            }}
            className="ModalClose_btn"
          >
            X
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
