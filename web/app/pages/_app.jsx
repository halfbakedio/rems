import { ChakraProvider } from "@chakra-ui/react";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import Script from "next/script";

import { StoreProvider } from "@/lib/store";
import { isDev } from "@/utils/env";
import reportAccessibility from "@/utils/reportAccessibility";
import theme from "@/utils/theme";

import "/styles/globals.css";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ClerkProvider {...pageProps}>
      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js" />
      <ChakraProvider theme={theme}>
        <StoreProvider {...pageProps.initialAppState}>
          {getLayout(<Component {...pageProps} />)}
        </StoreProvider>
      </ChakraProvider>
    </ClerkProvider>
  );
};

if (isDev) {
  reportAccessibility(React);
}

export default App;
