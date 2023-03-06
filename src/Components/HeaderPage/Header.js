
import React, { useEffect, useState } from "react";
import "./Header.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const Header = () => {
  const [HeaderPage, setHeaderPage] = useState([]);
  const myHeader = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      )
      .then((resp) => {
        console.log(resp.data.results);
        return setHeaderPage(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    myHeader();
  }, []);

  return (
    <div>
      <div
        style={{
          fontSize: "100px",
          color: "Red",
          background: "rgb(238, 232, 232)",
        }}
      >
        NET  WATCH
      </div>
      <div className="moviePosters">
        <div>
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            swipeable={true}
            className="Carousel"
          >
            {HeaderPage?.map((data, index) => {
              return (
                <div
                  key={index}
                  style={{ textDecoration: "none", color: "Whitesmoke" }}
                >
                  <div className="HomePoster_Image">
                    <img
                      src={`https://image.tmdb.org/t/p/original${
                        data && data.backdrop_path
                      }`}
                      alt={data.original_title}
                    />
                  </div>
                  <div className="HomePoster_overlay">
                    <div className="HomePoster_Title">
                      {data.original_title}
                    </div>
                    <div className="HomePoster_loadtime">
                      {data.release_date}
                    </div>
                    <div className="HomePoster_Rating">
                      {data.vote_average}
                      <FaStar />{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Header;
