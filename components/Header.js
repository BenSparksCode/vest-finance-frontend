import Link from "next/link";
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

const Header = (props) => {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const handleConnectWalletClicked = (e) => {
    console.log("Connecting to wallet...");
    activateBrowserWallet();
  };

  return (
    <div>
      <Link href="/">
        <div className="Header">{props.appTitle}</div>
      </Link>
      <button onClick={handleConnectWalletClicked}>Connect Wallet</button>
      {account && <p>Account: {account}</p>}
      {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
    </div>
  );
};

export default Header;
