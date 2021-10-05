import Router from "next/router";
import { Button, Box } from "@chakra-ui/react";

type Props = {
  title?: string;
};

const Login = ({ title = "Log In" }: Props) => {
  return (
    <Button
      onClick={() => {
        Router.push("/api/login");
      }}
    >
      {title}
    </Button>
  );
};

export default Login;
