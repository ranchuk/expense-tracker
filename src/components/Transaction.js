import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
import PropTypes from 'prop-types'

function Transaction({transcation}) {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transcation.amount < 0 ? '-' : '+';
    return (
        <li className={ transcation.amount < 0  ? "minus" : "plus" }>
            {transcation.text} <span>{sign}${Math.abs(transcation.amount)}</span>
            <button className="delete-btn" onClick = {(e)=>deleteTransaction(transcation.id)}>x</button>
        </li>
    )
}

Transaction.propTypes = {
    transcation : PropTypes.object.isRequired
}

export default Transaction

