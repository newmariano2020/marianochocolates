const Banners = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={require("../../../img/banners-home/banner-home-1.png").default}
            alt="First slide"
            />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={require("../../../img/banners-home/banner-home-2.png").default}
            alt="Second slide"
            />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={require("../../../img/banners-home/banner-home-3.png").default}
            alt="Third slide"
            />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={require("../../../img/banners-home/banner-home-4.png").default}
            alt="Fourth slide"
          />
        </div>
      </div>
    </div>
  );
};
export default Banners;
