import React, { useState, useEffect } from 'react' 
import './wallet.css'

import app from "../../base"

import { WalletItem } from './sub-components/wallet-item'


const WalletList = () => {
    const [wallets, setWallet] = useState([])

    useEffect( () => {
        const fetchData = async () => {
            const db = app.firestore()
            const data = await db.collection('Wallets').get()
            setWallet( data.docs.map(doc => ({...doc.data(), id: doc.id})))        }

        fetchData()
    }, [])

    return (
        <div className = 'walletForm'>
            {wallets.map((wallet, i) => (
                <div className='wallet-item' key={i}>
                    <WalletItem  wallet={wallet}/>
                </div>
            ))}
        </div>
    )
}

export { WalletList }