const Footer = () => {
  return <div className="footer">
    <div className="upper-section">
      <div className="left-footer">
        <div className="logo-footer">
          <img src={require('../img/logo-footer.png').default} alt=""></img>
        </div>
        <div className="text-left-footer">
          <span className="title">La Pinocha Chocolates</span>
          <span className="bajada-de-linea">Nacimos en el amor. Crecimos en el bosque</span>
        </div>
      </div>
      <div className="right-footer">
        <div className="right-footer-text">
          <div className="contact">
            <span>Escribinos!</span>
          </div>
          <div className="footer-message">
            <span>Estamos para ayudarte</span>
          </div>
          <span className="contact-em">info@lapinochachocolates.com</span>
        </div>
      </div>
      <div className="follow-us">
        <div className="follow-text">
          <span>
            Seguinos
          </span>
        </div>
        <div className="footer-logo-right">
          <img src={require('../img/instagram-relleno.png').default} alt="" class="instagram-relleno"></img>
          <img src={require('../img/facebook-relleno.png').default} alt=""></img>
        </div>
      </div>
    </div>
    <div className="rights">
      Todos los derechos reservados 2021 | Diseño por woopi.com.ar
    </div>
  </div>
};


export default Footer;