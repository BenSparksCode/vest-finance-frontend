import Link from "next/link";

import Layout from "../components/Layout";
import LandingView from "./landing";

import "../styles.scss";

const App = () => (
  <Layout>
    <br />
    <Link href="/">
      <a>Welcome to Vest Finance</a>
    </Link>
  </Layout>
);

export default App;
