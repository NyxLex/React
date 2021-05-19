import React from 'react'

import { WalletAddForm } from '../../components/wallet/wallet-add-form'
import { WalletList } from '../../components/wallet/wallet-list'

const WalletPage = () => {
    return (
        <div>
            <WalletAddForm />
            <WalletList />
        </div>
    )
}

export { WalletPage }