import React, { useState } from "react";
import "./CommentModal.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { BsChatSquareDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSend } from "react-icons/ai";
const CommentModal = ({ title }) => {
  const [TextState, setTextState] = useState("");
  const [ClickState, setClickState] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e) => {
    return setTextState(e.target.value);
  };
  const CommentSubmitHandler = () => {
    setClickState((text) => {
      return [...text, TextState];
    });
    setTextState("");
    console.log("text entered");
  };

  return (
    <>
      <Button
        flex="1"
        variant="ghost"
        leftIcon={<BsChatSquareDots />}
        onClick={onOpen}
      >
        Comment
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <p>{title}</p>
          </ModalHeader>
          {ClickState ? (
            <>
              {ClickState.map((oldItems, index) => {
                return (
                  <span>
                    <p
                      key={index}
                      style={{
                        background: "white",
                        margin: "14px",
                        marginLeft: "15%",
                        border: "1px solid black",
                        width: "fit-content ",
                        padding: "5px",
                        display: "flex",
                        alignItems: "flex-start",
                        fontSize: "20px",
                        border: "1px solid gray",
                        borderRadius: "18px",
                        boxShadow: "2px 2px 2px gray",
                        padding: "5px",
                        gap: "4px",
                        position: "relative",
                      }}
                    >
                      <CgProfile
                        style={{ marginTop: "2px", fontSize: "25px" }}
                      />
                      {oldItems}
                    </p>
                  </span>
                );
              })}
            </>
          ) : (
            <p style={{ fontSize: "20px" }} font="bold">
              Leave a comment if u have watched the movie
            </p>
          )}
          <ModalCloseButton />
          <ModalBody>
            <Button variant="ghost" onClick={CommentSubmitHandler}>
              <AiOutlineSend />
            </Button>
            <textarea
              rows={4}
              style={{
                marginLeft: "13%",
                marginTop: "9%",
              }}
              onChange={handleChange}
              value={TextState}
              className="textArea"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommentModal;
