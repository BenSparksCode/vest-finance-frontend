import Link from "next/link";

const handleConnectWalletClicked = (e) => {
  console.log(e, "ahashkdfs");
};

const Header = (props) => {
  return (
    <div>
      <Link href="/">
        <div className="Header">{props.appTitle}</div>
      </Link>
      <button onClick={handleConnectWalletClicked}>Connect Wallet</button>
    </div>
  );
};

export default Header;
