import { Container, SimpleGrid } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Container mt={8}>
      <SimpleGrid colums={1} spacing={8}>
        {children}
      </SimpleGrid>
    </Container>
  );
}
