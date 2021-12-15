import React from "react";
import { Slide } from "react-slideshow-image";

const Banners = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div>
        <Slide easing="ease" autoplay={true} arrows={false}>
          <div
            className="banner-home"
            style={{
              width: "100%",
              height: "640px",
              backgroundImage: `url(${
                require("../../../img/banners-home/banner-home-1.png").default
              })`,
            }}
          >
            <div className="middle-banner-home">
              Mucho mas que una tentacion
            </div>
          </div>
          <div
            className="banner-home"
            style={{
              width: "100%",
              height: "640px",
              backgroundImage: `url(${
                require("../../../img/banners-home/banner-home-2.png").default
              })`,
            }}
          >
            <div className="middle-banner-home">
              Amamos lo que hacemos
            </div>
          </div>
          <div
            className="banner-home"
            style={{
              width: "100%",
              height: "640px",
              backgroundImage: `url(${
                require("../../../img/banners-home/banner-home-3.png").default
              })`,
            }}
          >
            <div className="middle-banner-home">
              Somos el regalo perfecto
            </div>
          </div>
          <div
            className="banner-home"
            style={{
              width: "100%",
              height: "640px",
              backgroundImage: `url(${
                require("../../../img/banners-home/banner-home-4.png").default
              })`,
            }}
          >
            <div className="middle-banner-home">
              Descubri donde estamos
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};
export default Banners;
