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
            src="/img/banners-home/Banners_Home_001.jpg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/img/banners-home/Banners_Home_002.jpg"
            alt="second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/img/banners-home/Banners_Home_003.jpg"
            alt="third slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/img/banners-home/Banners_Home_004.jpg"
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
