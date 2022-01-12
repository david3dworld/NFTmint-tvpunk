import "./index.css";
import { useMemo } from "react";
import NavBar from "../../components/navBar/navBar";
import Home from "../../components/home/index";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const HomePage = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],
    []
  );

  const container = {
    display: 'flex',
    flexDirection: 'column' as any,
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div style={{background: 'black', height: '100vh'}}>
      <NavBar />
      <div style={{...container, }}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
            <div style={{marginTop: '0px'}}>

           ` <Home
              candyMachineId={candyMachineId}
              config={config}
              connection={connection}
              startDate={startDateSeed}
              treasury={treasury}
              txTimeout={txTimeout}
            />`
            </div>
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>

      </div>
    </div>
    );
};

export default HomePage;
