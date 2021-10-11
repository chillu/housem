import { ChakraProvider } from "@chakra-ui/react";

if (process.env.NEXT_PUBLIC_API_MOCKING) {
  if (typeof window === "undefined") {
    const { server } = require("../src/mocks/server");
    server.listen();
  } else {
    const { worker } = require("../src/mocks/browser");
    worker.start();
  }
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
