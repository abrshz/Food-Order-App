import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { useCurrencyFormatter } from '../hooks/useCurrencyFormatter'
import UserProgressContext from '../store/UserProgressContext'

function Cart() {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)
    const cartTotal = cartCtx.items.reduce((totalPrice , item)=> totalPrice + item.quantity * item.price, 0)
  return (
    <Modal className='cart' open={true}>
        <h2>Your Cart</h2>
        <ul>
          {cartCtx.items.map(item => <li key={item.id}>{item.name} - {item.quantity}</li>)}
        </ul>
        <p className='cart-total'>{useCurrencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
          <Button textOnly>Close</Button>
          <Button>Go to Checkout</Button>
        </p>
    </Modal>
  )
}

export default Cart