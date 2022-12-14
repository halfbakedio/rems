// import Head from "next/head";

type Props = {
  children?: React.ReactNode,
};

const AdminLayout = ({ children }: Props) => (
  <>
    {/* <Head> */}
    {/*   <title>REMS</title> */}
    {/*   <meta name="description" content="Real Estate Management System" /> */}
    {/*   <link rel="icon" href="/favicon.ico" /> */}
    {/* </Head> */}
    <main className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 overflow-y-auto">
            <div className="flex flex-wrap">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default AdminLayout;
