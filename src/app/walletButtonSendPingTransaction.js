import * as web3 from '@solana/web3.js';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const PROGRAM_ID = 'ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa'
const PROGRAM_DATA_ACCOUNT = 'Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod'

const WalletButtonSendPingTransaction = () => {
    const { connection } = useConnection()
    const { publicKey, sendTransaction } = useWallet()

    async function onClick() {
        if (!connection || !publicKey) {
            return alert('Please connect your wallet first.')
        }

        const programId = new web3.PublicKey(PROGRAM_ID)
        const programDataAccount = new web3.PublicKey(PROGRAM_DATA_ACCOUNT)

        const transaction = new web3.Transaction()
        const instruction = new web3.TransactionInstruction({
            keys: [
                {
                    pubkey: programDataAccount,
                    isSigner: false,
                    isWritable: true
                }
            ],
            programId
        })

        transaction.add(instruction)

        sendTransaction(transaction, connection)
            .then(signature => {
                alert(`Transaction sent: ${signature}`)
            })
            .catch(error => {
                console.error(error)
                alert(`Transaction failed: ${error.message}`)
            })
    }

    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: publicKey ? 'purple' : 'grey',
                color: 'white',
                padding: '15px 1.5em',
                borderRadius: '.3em',
                border: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: publicKey ? 'pointer' : 'not-allowed'
            }}>
            {
                publicKey
                    ? 'Click here to send a ping transaction.'
                    : 'Connect your wallet to send a ping transaction.'
            }
        </button>
    )
}

export default WalletButtonSendPingTransaction