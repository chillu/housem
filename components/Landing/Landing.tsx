import { Box, Heading, Text } from "@chakra-ui/react";
import Login from "../Auth/Login";

export default function Landing() {
  return (
    <Box mb={8}>
      <Text>
        It's too easy to forget about regular checks. Get email reminders about
        them!
      </Text>
      <Login />
    </Box>
  );
}
