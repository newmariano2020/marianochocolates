import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <div className="header">
      <div className="logo">
        <a href="/">
          <img
            src={require("../img/logo.png").default}
            alt="La Pinocha logo"
          ></img>
        </a>
      </div>
      <div className="burger-menu float-right">
        <img
          src={require("../img/burger-menu.png").default}
          alt=""
          className="icon-1"
        />
      </div>
      <div className="nav-menu">
        <ul>
          <li className="list-elements">
            <NavLink
              to="/productos"
              className={({ isActive }) =>
                isActive ? "link-header bold" : "link-header"
              }
            >
              COMPRÁ ONLINE
            </NavLink>
            <NavLink
              to="/conocenos"
              className={({ isActive }) =>
                isActive ? "link-header bold" : "link-header"
              }
            >
              CONÓCENOS
            </NavLink>
            <NavLink
              to="/sucursales"
              className={({ isActive }) =>
                isActive ? "link-header bold" : "link-header"
              }
            >
              SUCURSALES
            </NavLink>
            <NavLink
              to="/franquicia"
              className={({ isActive }) =>
                isActive ? "link-header bold" : "link-header"
              }
            >
              FRANQUICIA
            </NavLink>

            <div className="social-icon">
              <a
                href="https://www.instagram.com/lapinochachocolates"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../img/instagram-white.png").default}
                  alt=""
                  className="icon-1"
                />
              </a>
              <a
                href="https://es-la.facebook.com/lapinochachocolates"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../img/facebook-white.png").default}
                  alt=""
                  className="icon-2"
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="d-flex flex-column menu-mobile">
      <div className="par">COMPRÁ ONLINE</div>
      <div className="impar">CONOCENOS</div>
      <div className="par">SUCURSALES</div>
      <div className="impar">FRANQUICIA</div>
    </div>
  </div>
);

export default Header;
