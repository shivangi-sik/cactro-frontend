import logo from "../assets/Slack-Emblema.png";

import { IoSearch } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg py-2">
      <div className="container">
        <a className="navbar-brand  " href="#">
          <img className="img-fluid pb-2" src={logo} alt="Logo" width="50" />
          <span className="fw-bold fs-3">Slack</span>
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <IoMenuSharp className="fs-3 prim-color" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle prim-color"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item " href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link prim-color" href="#">
                Enterprise
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link prim-color" href="#">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link prim-color" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item me-2 pt-1">
              <a className="nav-link">
                <IoSearch className="fs-4 prim-color" />
              </a>
            </li>
            <li className="nav-item me-2 pt-1">
              <a className="nav-link prim-color fw-medium" href="#">
                SignIn
              </a>
            </li>
            <li className="nav-item me-3 my-2">
              <button className="sec-btn rounded-1 fw-medium">
                TALK TO SALES
              </button>
            </li>
            <li className="nav-item my-2">
              <button className="prim-btn rounded-1 fw-medium">
                TRY FOR FREE
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
