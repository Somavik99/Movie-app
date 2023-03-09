import React from "react";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const CommentSubmitHandler = () => {};

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
          <ModalBody></ModalBody>
          <ModalBody>
            <textarea rows={4} style={{ height: "100px", width: "15em",marginLeft:"15%" }} />
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
