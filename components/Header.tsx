import Link from "next/link";
import { withRouter } from "next/router";
import { Navbar } from "react-bootstrap";
import LogoutBtn from "./Auth/Logout";

const Header = ({ router: { pathname } }) => (
  <Navbar className="justify-content-between navBar">
    <Navbar.Brand className="navBrand">
      HouseM - Maintain your own four walls
    </Navbar.Brand>
    <Navbar.Collapse className="justify-content-end navContainer navButton">
      <LogoutBtn logoutHandler={() => {}} />
    </Navbar.Collapse>
  </Navbar>
);

export default withRouter(Header);
