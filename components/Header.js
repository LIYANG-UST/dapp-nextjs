import { ConnectButton } from "web3uikit";

export default function Header() {
  return (
    <nav>
      Home
      <ConnectButton moralisAuth={false} />;
    </nav>
  );
}
