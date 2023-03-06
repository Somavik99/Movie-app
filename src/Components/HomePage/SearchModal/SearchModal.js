import React from "react";
import { Icon, Modal } from "semantic-ui-react";
import { CiSearch } from "react-icons/ci";
import { Button } from "@chakra-ui/react";

const SearchModal = ({movieData}) => {
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
            boxShadow:"3px 3px 3px  gray"
          }}
        >
          Search movies...
        </Button>
      }
    >
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
