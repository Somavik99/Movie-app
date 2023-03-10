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
                  <>
                    <p key={index} style={{ marginLeft: "13%",border:"1px solid black" }}>
                      👍{oldItems}
                    </p>
                  </>
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
            <textarea
              rows={4}
              style={{
                height: "100px",
                width: "15em",
                marginLeft: "15%",
                marginTop: "25%",
              }}
              onChange={handleChange}
              value={TextState}
              className="textArea"
            />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={CommentSubmitHandler}>
              Submit
            </Button>
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
