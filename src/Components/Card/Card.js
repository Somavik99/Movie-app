import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Flex,
  Heading,
  Box,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaShareAlt } from "react-icons/fa";
import { CiBeerMugFull } from "react-icons/ci";
import { BsChatSquareDots } from "react-icons/bs";
import "./Card.css";
import ModalPage from "../Modal/ModalPage";

const CardView = ({ image, title, detail, rating, release, vote }) => {
  return (
    <Card maxW="sm" className="Card">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="sm">{title}</Heading>
              <Text>Rating:{rating}</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<CiBeerMugFull />}
          />
        </Flex>
      </CardHeader>
      <CardBody className="Card_body">
        <Image
          className="Card_image"
          objectFit="inherit"
          src={image}
          alt="Chakra UI"
        />
      </CardBody>
      <div className="Card_text">
        <Text>{detail}</Text>
      </div>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <ModalPage
          image={image}
          title={title}
          detail={detail}
          rating={rating}
          release={release}
          vote={vote}
        />

        <Button flex="1" variant="ghost" leftIcon={<BsChatSquareDots />}>
          Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<FaShareAlt />}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardView;
