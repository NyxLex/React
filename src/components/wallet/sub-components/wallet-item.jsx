import React, { useState } from 'react'
import app from '../../../base'

const WalletItem = ( {wallet} ) => {
    const [money, setMoney] = useState(wallet.walletMoney)

    const updateMoney = () => {
        const db = app.firestore()
        db.collection('Wallets').doc(wallet.id).set( {...wallet, walletMoney: money } )
        alert('Wallet sum changed')
    }

    const deleteWallet = () => {
        const db = app.firestore()
        db.collection('Wallets').doc(wallet.id).delete()
        alert('Wallet deleted')
    }

    return (
        <>
            <p>{wallet.walletName}</p>
            <input
                type='number'
                value={money} 
                onChange={e => {
                    setMoney(e.target.value)
                }} 
            />
            <button onClick={updateMoney}>Update</button>
            <button onClick={deleteWallet}>Delete</button>
        </>
    )
}

export { WalletItem }