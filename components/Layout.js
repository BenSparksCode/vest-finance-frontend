import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";

import navButtons from "../config/buttons";

const Layout = (props) => {
  const appTitle = `Vest Finance`;

  return (
    <div className="Layout">
      <Head>
        <title>Vest Finance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header appTitle={appTitle} />
      <div className="Content">{props.children}</div>
      {/* <NavBar navButtons={navButtons} /> */}
    </div>
  );
};

export default Layout;
