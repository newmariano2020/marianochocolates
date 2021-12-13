import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div class="logo">
      <a href="/"><img src="/img/logo.png" alt="La Pinocha logo"></img></a>
    </div>
    <div class="nav-menu">
      <ul>

        <li class="list-elements">
          <Link to="/productos" class="color-link">COMPRÁ ONLINE</Link>
          <Link to="/conocenos" class="color-link">CONÓCENOS</Link>
          <Link to="/sucursales" class="color-link">SUCURSALES</Link>
          <Link to="/franquicia" class="color-link">FRANQUICIA</Link>

          <div className="social-icon">
            <img src="/img/instagram-white.png" alt="" class="icon-1"/>
            <img src="/img/facebook-white.png" alt="" class="icon-2"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
