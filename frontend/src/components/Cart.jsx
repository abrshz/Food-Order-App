import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'

function Cart() {
    useContext(CartContext)
  return (
    <Modal className='cart'>
        <h2>Your Cart</h2>
        <ul>

        </ul>
    </Modal>
  )
}

export default Cart