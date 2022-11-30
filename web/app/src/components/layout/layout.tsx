// import Head from "next/head";

import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { Sidebar } from "@components/sidebar";

type Props = {
  children?: React.ReactNode,
};

const Layout = ({ children }: Props) => (
  <>
    {/* <Head> */}
    {/*   <title>REMS</title> */}
    {/*   <meta name="description" content="Real Estate Management System" /> */}
    {/*   <link rel="icon" href="/favicon.ico" /> */}
    {/* </Head> */}
    <main className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <div className="flex flex-1 overflow-y-auto">
            <div className="flex flex-wrap">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  </>
);

export default Layout;
