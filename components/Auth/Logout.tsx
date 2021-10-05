import React from "react";
import { Button } from "@chakra-ui/react";
import Router from "next/router";

const Logout = () => (
  <Button onClick={() => Router.push("/api/logout")}>Log Out</Button>
);

export default Logout;
