import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Transcation from './Transaction'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

    return (
        <>
          <h3>History</h3>
          <ul className="list">
            {transactions.map((transcation) => (
              <Transcation key={transcation.id} transcation={transcation}/>
            ))}
          </ul>
        </>
    )
}


export default TransactionList
