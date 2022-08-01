import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const NavLinkProductos = ({ mobile }) => (
    <NavLink
      to="/productos"
      className={({ isActive }) =>
        `${mobile ? "" : "link-header"} ${isActive ? "bold" : ""}`
      }
      onClick={() => setShowMenu(!showMenu)}
    >
      COMPRÁ ONLINE
    </NavLink>
  );
  const NavLinkConocenos = ({ mobile }) => (
    <NavLink
      to="/conocenos"
      className={({ isActive }) =>
        `${mobile ? "" : "link-header"} ${isActive ? "bold" : ""}`
      }
      onClick={() => setShowMenu(!showMenu)}
    >
      CONÓCENOS
    </NavLink>
  );
  const NavLinkSucursales = ({ mobile }) => (
    <NavLink
      to="/sucursales"
      className={({ isActive }) =>
        `${mobile ? "" : "link-header"} ${isActive ? "bold" : ""}`
      }
      onClick={() => setShowMenu(!showMenu)}
    >
      SUCURSALES
    </NavLink>
  );
  const NavLinkFranquicia = ({ mobile }) => (
    <NavLink
      to="/franquicia"
      className={({ isActive }) =>
        `${mobile ? "" : "link-header"} ${isActive ? "bold" : ""}`
      }
      onClick={() => setShowMenu(!showMenu)}
    >
      FRANQUICIA
    </NavLink>
  );
  return (
    <div>
      <div className="header">
        <div className="logo">
          <a href="/">
            <img
              src={require("../img/logo-footer.png").default}
              alt="La Pinocha logo"
            ></img>
          </a>
        </div>
        <div
          className="burger-menu float-right"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img
            src={require("../img/burger-menu.png").default}
            alt=""
            className="icon-1"
          />
        </div>
        <div className="nav-menu">
          <ul>
            <li className="list-elements">
              <NavLinkProductos></NavLinkProductos>
              <NavLinkConocenos></NavLinkConocenos>
              <NavLinkSucursales></NavLinkSucursales>
              <NavLinkFranquicia></NavLinkFranquicia>

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
      <div
        className={`menu-mobile ${showMenu ? "d-flex flex-column" : "d-none"}`}
      >
        <div className="par">
          <NavLinkProductos mobile={true}></NavLinkProductos>
        </div>
        <div className="impar">
          <NavLinkConocenos mobile={true}></NavLinkConocenos>
        </div>
        <div className="par">
          <NavLinkSucursales mobile={true}></NavLinkSucursales>
        </div>
        <div className="impar">
          <NavLinkFranquicia mobile={true}></NavLinkFranquicia>
        </div>
      </div>
    </div>
  );
};

export default Header;
