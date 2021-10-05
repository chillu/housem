import { Box, Heading, Text } from "@chakra-ui/react";
import Login from "../Auth/Login";

export default function Landing() {
  return (
    <Box>
      <Heading>HouseM - Maintain your own four walls</Heading>
      <Text>
        It's too easy to forget about regular checks. Get email reminders about
        them!
      </Text>
      <Login />
    </Box>
  );
}
