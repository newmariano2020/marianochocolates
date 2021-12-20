import React from "react";
import { Slide } from "react-slideshow-image";

const Banners = () => {
  const MiddleBannerHome = ({ upperText, middleText, callToActionText, href }) => (
    <div className="middle-banner-home">
      <div className="upper">{upperText}</div>
      <div className="middle">{middleText}</div>
      <a href={href}>
        <div className="call-to-action">
          <span>{callToActionText}</span>
        </div>
      </a>
    </div>
  );
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
            <MiddleBannerHome
              upperText="Bienvenidos #Chocolovers"
              middleText="Mucho mas que una tentacion"
              callToActionText="COMPRÁ ONLINE"
              href="/productos"
            ></MiddleBannerHome>
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
            <MiddleBannerHome
              upperText="Experiencia en Chocolates"
              middleText="Amamos lo que hacemos"
              callToActionText="VER PRODUCTOS"
              href="/franquicia"
            ></MiddleBannerHome>
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
            <MiddleBannerHome
              upperText="Pensá en chocolate"
              middleText="Somos el regalo perfecto"
              callToActionText="SORPRENDÉ"
              href="/sucursales"
            ></MiddleBannerHome>
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
            <MiddleBannerHome
              upperText="Visitanos siempre!"
              middleText="Descubre donde estamos"
              callToActionText="SUCURSALES"
              href="/sucursales"
            ></MiddleBannerHome>
          </div>
        </Slide>
      </div>
    </div>
  );
};
export default Banners;
