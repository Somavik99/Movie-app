
import React from "react";

import SearchModal from "./SearchModal/SearchModal";

const HomePageSearch = ({ HomePageState }) => {
  return (
    <div>
      <SearchModal movieData={HomePageState} />
    </div>
  );
};

export default HomePageSearch;
