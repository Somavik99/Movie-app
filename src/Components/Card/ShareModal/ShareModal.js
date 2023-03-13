import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import {
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

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
          <span>
            <FacebookShareButton
              url={url}
              quote={"Share to every one"}
              hashtag={"#FAVEMOVIE"}
            >
              <FacebookIcon size={60} round={true} />
            </FacebookShareButton>
          </span>
          <span>
            <WhatsappShareButton
              url={url}
              quote={"Share to every one"}
              hashtag={"#FAVEMOVIE"}
            >
              <WhatsappIcon size={60} round={true} />
            </WhatsappShareButton>
          </span>
          <span>
            <TwitterShareButton
              url={url}
              quote={"Share to every one"}
              hashtag={"#FAVEMOVIE"}
            >
              <TwitterIcon size={60} round={true} />
            </TwitterShareButton>
          </span>
          <span>
            <InstapaperShareButton
              url={url}
              quote={"Share to every one"}
              hashtag={"#FAVEMOVIE"}
            >
              <InstapaperIcon size={60} round={true} />
            </InstapaperShareButton>
          </span>
          <span>
            <RedditShareButton
              url={url}
              quote={"Share to every one"}
              hashtag={"#FAVEMOVIE"}
            >
              <RedditIcon size={60} round={true} />
            </RedditShareButton>
          </span>
          <span>
            <PinterestShareButton
              url={url}
              quote={"Share to every one"}
              hashtag={"#FAVEMOVIE"}
            >
              <PinterestIcon size={60} round={true} />
            </PinterestShareButton>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
