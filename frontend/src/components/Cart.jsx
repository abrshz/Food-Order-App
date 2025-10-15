import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { useCurrencyFormatter } from '../utility/formatting'
import UserProgressContext from '../store/UserProgressContext'
import CartItem from './CartItem'

function Cart() {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)
    const cartTotal = cartCtx.items.reduce((totalPrice , item)=> totalPrice + item.quantity * item.price, 0)

    function handleClose() {
        userProgressCtx.hideCart();
    } 

    function handleCheckout() {
        userProgressCtx.showCheckout();
    }
  return (
    <Modal className='cart' open={userProgressCtx.progress === 'cart'}>
        <h2>Your Cart</h2>
        <ul>
          {cartCtx.items.map(item => <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} /> )}
        </ul>
        <p className='cart-total'>${cartTotal}</p>
        <p className="modal-actions">
          <button className='buttonClose' onClick={handleClose}>Close</button>
          <button className='buttonCheckout' onClick={handleCheckout}>Go to Checkout</button>
        </p>
    </Modal>
  )
}

export default Cart;