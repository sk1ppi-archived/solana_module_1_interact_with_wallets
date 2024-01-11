'use client'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import WalletContextProvider from './walletContextProvider';
import WalletButtonSendPingTransaction from './walletButtonSendPingTransaction';

export default function Home() {
  return (
    <div>
      <WalletContextProvider>
        <WalletMultiButton />
        <br></br>
        <br></br>
        <WalletButtonSendPingTransaction />
      </WalletContextProvider>
    </div>
  )
}
