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
const CommentModal = () => {
  const [TextState, setTextState] = useState([""]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e) => {
    return setTextState(e.target.value);
  };
  const CommentSubmitHandler = (text) => {
    return setTextState(text);
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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {CommentSubmitHandler ? <div>{TextState}</div> : "  "}
          </ModalBody>
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
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={CommentSubmitHandler}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommentModal;
