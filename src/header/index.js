import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="logo">
      <a href="/"><img src={require("../img/logo.png").default} alt="La Pinocha logo"></img></a>
    </div>
    <div className="nav-menu">
      <ul>

        <li className="list-elements">
          <Link to="/productos" className="color-link">COMPRÁ ONLINE</Link>
          <Link to="/conocenos" className="color-link">CONÓCENOS</Link>
          <Link to="/sucursales" className="color-link">SUCURSALES</Link>
          <Link to="/franquicia" className="color-link">FRANQUICIA</Link>

          <div className="social-icon">
            <img src={require("../img/instagram-white.png").default} alt="" className="icon-1"/>
            <img src={require("../img/facebook-white.png").default} alt="" className="icon-2"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
