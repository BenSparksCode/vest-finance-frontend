import Link from "next/link";

const Header = (props) => (
  <Link href="/">
    <div className="Header">{props.appTitle}</div>
  </Link>
);

export default Header;
