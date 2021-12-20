const Footer = () => {
  return (
    <div className="container footer">
      <div className="row upper-sections d-block d-sm-none">
        <div className="col-2">
          {" "}
          {/** Logo */}
          <div className="logo-footer">
            <img src={require("../img/logo-footer.png").default} alt=""></img>
          </div>
        </div>
        <div className="right-footer-content">
          <div className="right-footer-content_group-1">
            <span className="right-footer-content_title">
              La Pinocha Chocolates
            </span>
          </div>
          <div>
            <span className="right-footer-content_bajada-de-linea">
              Nacimos en el mar. Crecimos en el bosque
            </span>
          </div>
          <div className="right-footer-content_group-2">
            <span className="contact-us-font">Escribinos! </span>
            <span className="footer-message-font">Estamos para ayudarte</span>
          </div>
          <div>
            <a href="mailto:info@lapinochachocolates.com">
              <span className="contact-em">info@lapinochachocolates.com</span>
            </a>
          </div>
          <div className="follow-us">
            <div className="follow-text">
              <span>Seguinos</span>
            </div>
            <div className="footer-logo-right">
              <a
                href="https://www.instagram.com/lapinochachocolates"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../img/instagram-relleno.png").default}
                  alt=""
                  className="instagram-relleno"
                ></img>
              </a>
              <a
                href="https://es-la.facebook.com/lapinochachocolates"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../img/facebook-relleno.png").default}
                  alt=""
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-sm d-none d-sm-block">
        <div className="row fix-padding-top-footer-top">
          <div className="col">
            <div className="d-flex flex-row float-left">
              <div className="col">
                <img
                  src={require("../img/logo-footer.png").default}
                  alt=""
                  className="float-right"
                ></img>
              </div>
              <div className="col">
                <div className="d-flex flex-column">
                  <span className="semibold-14">La Pinocha Chocolates</span>
                  <span className="regular-14">
                    Nacimos en el mar. Crecimos en el bosque
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col footer-right-sm">
            <div className="row fix-padding-escribinos">
              <div className="col d-flex flex-column">
                <span className="semibold-14">Escribinos</span>
                <span className="semibold-14">Estamos para ayudarte</span>
                <span className="regular-14">
                  <a href="mailto:info@lapinochachocolates.com">
                    <span className="contact-em">
                      info@lapinochachocolates.com
                    </span>
                  </a>
                </span>
              </div>
              <div className="col float-right">
                <div className="follow-us">
                  <div className="follow-text">
                    <span>Seguinos</span>
                  </div>
                  <div className="footer-logo-right">
                    <a
                      href="https://www.instagram.com/lapinochachocolates"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={require("../img/instagram-relleno.png").default}
                        alt=""
                        className="instagram-relleno"
                      ></img>
                    </a>
                    <a
                      href="https://es-la.facebook.com/lapinochachocolates"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={require("../img/facebook-relleno.png").default}
                        alt=""
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row rights">
        <span>Todos los derechos reservados 2021 | Diseño por woopi.com.ar</span>
      </div>
    </div>
  );
};

export default Footer;
