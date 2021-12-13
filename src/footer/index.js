const Footer = () => {
  return <div className="footer">
    <div className="upper-section">
      <div className="left-footer">
        <div className="logo-footer">
          <img src={require('../img/logo-footer.png').default} alt=""></img>
        </div>
        <div className="text-left-footer">
          <span className="title">La Pinocha Chocolates</span>
          <span className="bajada-de-linea">Nacimos en el mar. Crecimos en el bosque</span>
        </div>
      </div>
      <div className="right-footer">
        <span>Escribinos!</span>
        <span>Estamos para ayudarte</span>
        <span>info@lapinochachocolates.com</span>
      </div>
    </div>
    <div className="rights">
      Todos los derechos reservados 2021 | Diseño por woopi.com.ar
    </div> 
  </div>
};


export default Footer;