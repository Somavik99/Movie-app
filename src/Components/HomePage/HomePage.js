import React, { useState, useEffect } from "react";
import CardView from "../Card/Card";
import "./HomePage.css";
import axios from "axios";
import HomePageSearch from "./HomePageSearch";
const HomePage = () => {
  const [HomePageState, setHomePageSate] = useState([]);
  const myHomePage = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      )
      .then((res) => {
        return setHomePageSate(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    myHomePage();
  }, []);

  return (
    <div className="HomePage">
      <>
      <HomePageSearch HomePageState={HomePageState} />
        <div className="HomePage_container">
          <>
            {HomePageState.map((val, index) => {
              return (
                <CardView
                  key={index}
                  vote={val.vote_count}
                  release={val.release_date}
                  rating={val.vote_average}
                  detail={val.overview}
                  image={`https://image.tmdb.org/t/p/original${
                   val && val.backdrop_path
                  }`}
                  title={val.original_title}
                />
              );
            })}
          </>
        </div>
      </>
    </div>
  );
};

export default HomePage;
