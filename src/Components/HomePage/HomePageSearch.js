import { Button } from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";

const HomePageSearch = ({ HomePageState }) => {
  const searchModal = ()=>{
    
  }
  return (
    <div>
      <Button
        variant="outline"
        leftIcon={<CiSearch />}
        style={{
          background: "whitesmoke",
          margin: "25px",
          border: "1px solid darkred",
        }}
        onClick={searchModal}
      >
        Search movies...
      </Button>
    </div>
  );
};

export default HomePageSearch;
