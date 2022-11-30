import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axios from "axios";

import "@styles/globals.css";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <SessionProvider session={pageProps.session}>
      <SWRConfig 
        value={{
          fetcher: fetcher,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </SessionProvider>
  );
};

export default App;
