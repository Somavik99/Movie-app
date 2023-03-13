import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { GrOverview } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import "./ModalPage.css";

const ModalPage = ({ image, title, rating, detail, release, vote }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  const btnRef = React.useRef(null);
  return (
    <>
      {/* <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        <Stack direction="row">
          <Radio value="inside">inside</Radio>
          <Radio value="outside">outside</Radio>
        </Stack>
      </RadioGroup> */}

      <Button
        flex="1"
        variant="ghost"
        mt={3}
        ref={btnRef}
        onClick={onOpen}
        leftIcon={<GrOverview />}
      >
        View Detail
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        onChange={setScrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          <Image src={image} alt={title} />
          <ModalHeader>
            <p>{title}</p>
            <span>Rating: {rating}</span>
            <span>{<FaStar />}</span>
            <p>Release-Date: {release}</p>
            <p>Total-Views: {vote}</p>
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody>{detail}</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalPage;
