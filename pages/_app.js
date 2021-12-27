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

    <br />

    <Link href="/dashboard">
      <button>Dashboard</button>
    </Link>
  </Layout>
);

export default App;
