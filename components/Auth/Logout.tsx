import React from "react";
import { Button } from "@chakra-ui/react";
import Router from "next/router";

const LogoutBtn = ({ logoutHandler }) => (
  <Button onClick={() => Router.push("/api/logout")}>Log Out</Button>
);

export default LogoutBtn;
