const Banners = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="/img/banners-home/banner-home-1.png"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/img/banners-home/banner-home-2.png"
            alt="second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/img/banners-home/banner-home-3.png"
            alt="third slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/img/banners-home/banner-home-4.png"
            alt="First slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};
export default Banners;
