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

export default function Nav() {
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
                <MDBNavbarItem>
                  <MDBNavbarLink
                    className="pe-2"
                    href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                    rel="nofollow"
                    target="_blank"
                  >
                    <MDBIcon fab icon="youtube" />
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink
                    className="nav-link px-2"
                    href="https://www.facebook.com/mdbootstrap"
                    rel="nofollow"
                    target="_blank"
                  >
                    <MDBIcon fab icon="facebook-f" />
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink
                    className="nav-link px-2"
                    href="https://twitter.com/MDBootstrap"
                    rel="nofollow"
                    target="_blank"
                  >
                    <MDBIcon fab icon="twitter" />
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink
                    className="nav-link ps-2"
                    href="https://github.com/mdbootstrap/mdb-ui-kit"
                    rel="nofollow"
                    target="_blank"
                  >
                    <MDBIcon fab icon="github" />
                  </MDBNavbarLink>
                </MDBNavbarItem>
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
                <h1 className="mb-5">This is title</h1>
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

      <div className="container my-5">
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quam
          minima perspiciatis eos tenetur. Praesentium dolores at quos aperiam
          sed, sint provident consectetur incidunt, nostrum porro earum commodi,
          ex architecto.
        </p>
      </div>
    </>
  );
}
