import { withRouter } from "next/router";
import { Box, Heading } from "@chakra-ui/react";
import LogoutBtn from "./Auth/Logout";

const Header = ({ router: { pathname } }) => (
  <Box mt="2">
    <Heading>HouseM - Maintain your own four walls</Heading>
    <LogoutBtn logoutHandler={() => {}} />
  </Box>
);

export default withRouter(Header);
