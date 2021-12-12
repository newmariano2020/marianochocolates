import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div class="logo">
      <img src="/img/logo.png" alt="La Pinocha logo"></img>
    </div>
    <div class="nav-menu">
      <ul>

        <li class="list-elements">
          <Link to="/productos" class="color-link">Comprá Online</Link>
          <Link to="/conocenos" class="color-link">Conócenos</Link>
          <Link to="/sucursales" class="color-link">Sucursales</Link>
          <Link to="/franquicia" class="color-link">Franquicia</Link>

          <div className="social">          
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>         
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
