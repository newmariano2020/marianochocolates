import React from "react";
import { Slide } from "react-slideshow-image";

const Productos = () => {
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
          <div class="container">
            <div class="row row-justify-content-around">
              <div class = "col-1 col-lg-1 col-xl-1 col-xxl-1" class="product-list"> 
                <a href="#chocolates">chocolates</a>
              </div>
              <div class = "col-1 col-lg-1 col-xl-1 col-xxl-1" class="product-list"> 
                <a href="#alfajores">alfajores</a>
              </div>
              <div class = "col-1 col-lg-1 col-xl-1 col-xxl-1" class="product-list"> 
                <a href="#confituras">confituras</a>
                </div>
                <div class = "col-1 col-lg-1 col-xl-1 col-xxl-1" class="product-list"> 
                <a href="#submarinos">submarinos</a>
                </div>
                <a href="#tabletas">tabletas</a>
              </div>
            </div>
          
          <div className="banners">
            <Slide
              easing="ease"
              autoplay={false}
              onChange={(oldValue, newValue) =>
                console.log({ oldValue, newValue })
              }
              prevArrow={
                <img
                  className="carrousel-arrow"
                  with="10px"
                  alt=""
                  src={require("../../img/left-carrousel-arrow.png").default}
                ></img>
              }
              nextArrow={
                <img
                  className="carrousel-arrow"
                  with="10px"
                  alt=""
                  src={require("../../img/right-carrousel-arrow.png").default}
                ></img>
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
            </Slide>
          </div>
          <div className="description-chocolate">
            <span className="choco-name">Nombre del Chocolate</span>
            <span className="choco-description">
              Sumar una descripción del producto
            </span>
            <button>¿Querés conocer más? Descubrilo acá</button>
          </div>
        </div>
        <div className="white-background"></div>
      </div>
    </div>
  );
};

export default Productos;
