import Link from "next/link";
import { Mainnet, DAppProvider } from "@usedapp/core";

import Layout from "../components/Layout";
import LandingView from "./landing";

import "../styles.scss";

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      "https://mainnet.infura.io/v3/3165a249c65f4198bf57200109b8fadf",
  },
};

const App = () => (
  <DAppProvider config={config}>
    <Layout>
      <br />
      <Link href="/">
        <a>Welcome to Vest Finance</a>
      </Link>
    </Layout>
  </DAppProvider>
);

export default App;
