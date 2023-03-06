import React from "react";
import { Icon, Card, Image, Modal } from "semantic-ui-react";
import { CiSearch } from "react-icons/ci";
import { Button } from "@chakra-ui/react";

const SearchModal = ({ movieData }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={
        <Button
          variant="outline"
          leftIcon={<CiSearch />}
          style={{
            background: "whitesmoke",
            margin: "25px",
            border: "none",
            boxShadow: "3px 3px 3px  gray",
          }}
        >
          Search movies...
        </Button>
      }
    >
      {movieData.map((Item, index) => {
        return (
          <Card>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src={`https://image.tmdb.org/t/p/original${
                    Item && Item.backdrop_path
                }`}
              />
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group{" "}
                <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        );
      })}
      <Modal.Actions>
        <Button color="green" inverted onClick={() => setOpen(false)}>
          <Icon name="checkmark" />
          Done
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default SearchModal;
