import React from "react";
import {
  MDBAnimatedNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBNavbarItem,
} from "mdb-react-ui-kit";

import { NavLink, NavMenue, NavBtn, NavBtnLink } from "./NavbarElements";

export default function Navbar () {
  return (
    <>
      <header>
        <MDBAnimatedNavbar expand="lg" fixed="top">
          <MDBContainer fluid>
            <MDBNavbarToggler
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MDBIcon fas icon="bars" />
            </MDBNavbarToggler>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <MDBNavbarNav fullWidth={false} className="me-auto mb-2 mb-lg-0">
                <MDBNavbarItem active>
                  <MDBNavbarLink href="#">Home</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink
                    href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                    rel="nofollow"
                    target="_blank"
                  >
                    Learn Bootstrap 5
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink
                    href="https://mdbootstrap.com/docs/standard/"
                    target="_blank"
                  >
                    Download MDB UI KIT
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>

              <MDBNavbarNav fullWidth={false} className="flex-row">
                <NavLink to="/LoginRegister" activeStyle>
                  Login
                </NavLink>
                <NavLink to="/About" activeStyle>
                  About
                </NavLink>
                <NavLink to="/Contact" activeStyle>
                  Contact
                </NavLink>
                <NavLink to="/Portfolio" activeStyle>
                  Portfolio
                </NavLink>
              </MDBNavbarNav>
            </div>
          </MDBContainer>
        </MDBAnimatedNavbar>

        <div
          id="intro"
          className="bg-image"
          style={{
            backgroundImage:
              "url(https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp)",
            height: "100vh",
          }}
        >
          <div
            className="mask text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <div className="container d-flex align-items-center text-center h-100">
              <div>
                <h1 className="mb-5">Forked-Lightning</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis molestiae laboriosam numquam expedita ullam saepe
                  ipsam, deserunt provident corporis, sit non accusamus maxime,
                  magni nulla quasi iste ipsa architecto? Autem!
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
