import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => <div className="header">
  <div class="logo">
    <img src="/img/logo.png" alt="La Pinocha logo"></img>
  
  </div>
  <div class="nav-menu">
    <ul>
        <li>
          <Link to="/productos">Comprá Online</Link>
          <Link to="/conocenos">Conócenos</Link>
          <Link to="/sucursales">Sucursales</Link>
          <Link to="/franquicia">Franquicia</Link>
          <FontAwesomeIcon icon={faIndustry}></FontAwesomeIcon>
        </li>
      </ul>
      </div>
</div>;

export default Header;