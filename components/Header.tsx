import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import Logout from "./Auth/Logout";
import Login from "./Auth/Login";

type Props = {
  isLoggedIn: boolean;
};

const Header = ({ isLoggedIn = false }: Props) => {
  const button = isLoggedIn ? <Logout /> : <Login />;

  return (
    <SimpleGrid columns={2}>
      <Box>
        <Heading>
          <TimeIcon mr={1} w={6} h={6} />
          HouseM
        </Heading>
        <Text size="lg">
          <strong>Maintain your own four walls</strong>
        </Text>
      </Box>
      {button}
    </SimpleGrid>
  );
};

export default Header;
