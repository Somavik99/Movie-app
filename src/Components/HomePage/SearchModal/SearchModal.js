import React, { useState } from "react";
import { Icon, Card, Image, Modal } from "semantic-ui-react";
import { CiSearch } from "react-icons/ci";
import { Button } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import "./SearchModal.css";

const SearchModal = ({ movieData }) => {
  const [open, setOpen] = React.useState(false);
  const [SearchState, setSearchState] = useState("");
  const keys = ["original_title", "title"];
  const search = (data) => {
    return data.filter((respsonse) =>
      keys.some((key) => respsonse[key].toString().includes(SearchState))
    );
  };

  const Movie = search(movieData);

  const SearchChange = (e) => {
    return setSearchState(e.target.value);
  };

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
      className="SearchMod"
    >
      <input
        value={SearchState}
        onChange={SearchChange}
        type="text"
        placeholder="🔍Search..."
        style={{ color: "black" }}
        className="SearchMod_input"
      />
      {SearchState ? (
        <div className="SearchMod_map">
          {Movie.map((Item, index) => {
            return (
              <Card key={index} className="SearchMod_card">
                <Card.Content>
                  <Image
                    floated="right"
                    size="medium"
                    src={`https://image.tmdb.org/t/p/original${
                      Item && Item.backdrop_path
                    }`}
                  />
                  <Card.Header>{Item.original_title}</Card.Header>
                  <Card.Meta>
                    Rating: {Item.vote_average}
                    <FaStar />
                  </Card.Meta>
                  <Card.Description>{Item.detail}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      Like
                    </Button>
                    <Button basic color="red">
                      Dislike
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            );
          })}
        </div>
      ) : (
        <div style={{ fontSize: "50px" }}>
          Start Searching....!
          <CiSearch />
        </div>
      )}
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
