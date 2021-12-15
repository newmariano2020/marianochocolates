const Footer = () => {
  return (
    <div className="footer">
      <div className="upper-section">
        <div className="left-footer">
          <div className="logo-footer">
            <img src={require("../img/logo-footer.png").default} alt=""></img>
          </div>
          <div className="text-left-footer">
            <span className="title">La Pinocha Chocolates</span>
            <span className="bajada-de-linea">
              Nacimos en el mar. Crecimos en el bosque
            </span>
          </div>
        </div>
        <div className="right-footer">
          <div className="right-footer-text">
            <div className="contact">
              <span className="contact-us-font">Escribinos!</span>
            </div>
            <div className="footer-message">
              <span className="footer-message-font">Estamos para ayudarte</span>
            </div>
            <a href="mailto:info@lapinochachocolates.com">
              <span className="contact-em">info@lapinochachocolates.com</span>
            </a>
          </div>
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
      <div className="rights">
        Todos los derechos reservados 2021 | Diseño por woopi.com.ar
      </div>
    </div>
  );
};

export default Footer;
