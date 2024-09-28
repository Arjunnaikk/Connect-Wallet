'use client'

import { useWeb3Modal } from '@web3modal/wagmi/react'

export default function Home() {
  const { open } = useWeb3Modal()

  return (
    <div>
      <button onClick={() => open()}>Connect Wallet</button>
    </div>
  )
}