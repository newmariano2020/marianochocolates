import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const chocolates = [
  {
    title: "chocolates",
    description: 'Descripcion de "chocolates"',
  },
  {
    title: "alfajores",
    description: 'Descripcion de "alfajores"',
  },
  {
    title: "confituras",
    description: 'Descripcion de "confituras"',
  },
  {
    title: "submarinos",
    description: 'Descripcion de "submarinos"',
  },
  {
    title: "tabletas",
    description: 'Descripcion de "tabletas"',
  },
];

const arrowStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 30,
  height: 30,
  cursor: "pointer",
};

const Productos = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const goto = (imageToShow) => {
    setSelectedImage(imageToShow);
  };

  return (
    <div className="productos">
      <div className="top-section">
        <span className="familia-la-pinocha">¿Cuál de todos elegís?</span>
        <span className="conoce-nuestra-historia-1">
          Elaboramos más de 60 sabores diferentes. <br />
          Te mostramos nuestros preferidos
        </span>
      </div>
      <div>
        <div className="productos-rose">
          <div className="product-list">
            <div id="chocolates">
              <a
                href="#nothing" // by pass href validation
                style={{
                  textDecoration: selectedImage === 0 ? "underline" : "none",
                }}
                onClick={() => goto(0)}
              >
                chocolates
              </a>
            </div>
            <div id="alfajores">
              <a
                href="#nothing" // by pass href validation
                style={{
                  textDecoration: selectedImage === 1 ? "underline" : "none",
                }}
                onClick={() => goto(1)}
              >
                alfajores
              </a>
            </div>
            <div id="confituras">
              <a
                href="#nothing" // by pass href validation
                style={{
                  textDecoration: selectedImage === 2 ? "underline" : "none",
                }}
                onClick={() => goto(2)}
              >
                confituras
              </a>
            </div>
            <div id="submarinos">
              <a
                href="#nothing" // by pass href validation
                style={{
                  textDecoration: selectedImage === 3 ? "underline" : "none",
                }}
                onClick={() => goto(3)}
              >
                submarinos
              </a>
            </div>
            <div id="tabletas">
              <a
                href="#nothing" // by pass href validation
                style={{
                  textDecoration: selectedImage === 4 ? "underline" : "none",
                }}
                onClick={() => goto(4)}
              >
                tabletas
              </a>
            </div>
          </div>

          <div className="banners">
            <Carousel
              selectedItem={selectedImage}
              width="70%"
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={true}
              onChange={(newValue) => setSelectedImage(newValue)}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <div
                    onClick={onClickHandler}
                    className="carrousel-arrow"
                    alt=""
                    style={{
                      backgroundImage: `url(${
                        require("../../img/left-carrousel-arrow.png").default
                      })`,
                      backgroundSize: "cover",
                      left: 15,
                      marginRight: 35,
                      ...arrowStyles,
                    }}
                  ></div>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <div
                    onClick={onClickHandler}
                    className="carrousel-arrow"
                    alt=""
                    style={{
                      backgroundImage: `url(${
                        require("../../img/right-carrousel-arrow.png").default
                      })`,
                      backgroundSize: "cover",
                      ...arrowStyles,
                      right: 15,
                    }}
                  ></div>
                )
              }
            >
              <img
                src={
                  require("../../img/banners-productos/chocolates.png").default
                }
                alt="chocolates"
              ></img>
              <img
                src={
                  require("../../img/banners-productos/alfajores.jpg").default
                }
                alt="alfajores"
              ></img>
              <img
                src={
                  require("../../img/banners-productos/confituras.jpg").default
                }
                alt="confituras"
              ></img>
              <img
                src={
                  require("../../img/banners-productos/submarinos.jpg").default
                }
                alt="submarinos"
              ></img>
              <img
                src={
                  require("../../img/banners-productos/tabletas.jpg").default
                }
                alt="tabletas"
              ></img>
            </Carousel>
          </div>
        </div>
        <div className="white-background">
          <div className="description-chocolate">
            <p className="choco-name">{chocolates[selectedImage].title}</p>
            <p className="choco-description">
              {" "}
              {chocolates[selectedImage].description}
            </p>
            <button className="margin-queres-conocer footer-submit">
              ¿Querés conocer más? Descubrilo acá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
