// NPM
import React from "react";

// Initialize Materialize Component
import M from "materialize-css/dist/js/materialize.min.js";

// CSS
import "./navbar.css"

// Language

function Navbar(props) {
  // Initalize Sidenav
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  });

  const sidenavBackground = {
    width: "100%",
    height: "auto",
  };

  return (
    <React.Fragment>
      {/* Turn Navbar into Sticky */}
      <div className="navbar-fixed">
        {/* Navbar */}
        <nav className="nav-extended amber darken-4">
          <div className="nav-wrapper">
            <a
              href="#!"
              className="brand-logo left"
              style={{ paddingLeft: "150px" }}
            >
              <span
                style={
                  {
                    /* font */
                  }
                }
              >
                Wanted{" "}
                <span style={{ fontSize: "15px" }}>你的一站式服務配對網站</span>
              </span>
            </a>
            <a
              href="#!"
              data-target="mobile-demo"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#!">
                  <p>關於我們</p>
                </a>
              </li>
              <li>
                <p>/</p>
              </li>
              <li>
                <a href="#!">
                  <p>成為服務提供者</p>
                </a>
              </li>
              <li>
                <a href="#!">
                  <p>登入</p>
                </a>
              </li>
              <li>
                <a href="#!">
                  <p>立即登記</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-content center">
            <span className="nav-title">試下直接搜尋</span>
          </div>
        </nav>
        {/* Navbar End */}
      </div>
      {/* Responsive Sidenav (activate when screen is too small) */}
      <ul className="sidenav" id="mobile-demo">
        <li>
          <div className="user-view">
            <div className="background">
              <img style={sidenavBackground} alt="background" src="" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </li>
        <li>
          <h5 className="center">Wanted!</h5>
        </li>
        <hr />
        <li>
          <a href="#!">
            <i className="material-icons">face</i>
            <p>About Us</p>
          </a>
        </li>
        <li>
          <a href="#!">
            <i className="material-icons">group_add</i>
            <p>Become Services Provider</p>
          </a>
        </li>
        <li>
          <a href="#!">
            <i className="material-icons">login</i>
            <p>Sign In</p>
          </a>
        </li>
        <li>
          <a href="#!">
            <i className="material-icons">add</i>
            <p>Sign Up</p>
          </a>
        </li>
      </ul>
      {/* Sidenav Ends */}
    </React.Fragment>
  );
}

export default Navbar;
