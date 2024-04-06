'use client';

import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

export const Web3ModalButton = () => {
  const { open } = useWeb3Modal();
  const { isConnected, chain } = useAccount();

  useEffect(() => {
    if (isConnected && chain) {
      window.alert(`Successfully connected to ${chain?.name}`);
    }
  }, [isConnected, chain]);

  return isConnected ? (
    <w3m-account-button />
  ) : (
    <button
      type="button"
      onClick={() => {
        open();
      }}
    >
      Connect
    </button>
  );
};
