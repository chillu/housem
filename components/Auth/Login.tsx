import Router from "next/router";
import { Button, Box } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box>
      <Button
        onClick={() => {
          Router.push("/api/login");
        }}
      >
        Log In or Sign up
      </Button>
    </Box>
  );
};

export default Login;
