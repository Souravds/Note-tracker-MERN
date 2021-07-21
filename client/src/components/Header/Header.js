import React, { useEffect } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../actions/userAction";

const Header = ({ setsearch }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  useEffect(() => {}, [userInfo]);
  return (
    <Navbar bg="light" expand="lg" varient="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Note tracker</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {userInfo && (
            <Form className="ml-auto d-flex py-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={(e) => setsearch(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          )}
          <Nav className="ml-auto" style={{ maxHeight: "100px" }} navbarScroll>
            {userInfo && (
              <>
                <Nav.Link>
                  <Link to="/notes">My Notes</Link>
                </Nav.Link>
                <NavDropdown
                  title={userInfo?.name}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="/profile">
                    My profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
