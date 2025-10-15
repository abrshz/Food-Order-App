import React from 'react'

function CartItem({name, quantity , price}) {
  return (
    <li className='cart-item'>
        <p>
            {name} - {quantity} * {price}
        </p>
        <p className='cart-item-actions'>
            <button>-</button>
            <span>{quantity}</span>
            <button>+</button>
        </p>
    </li>
  )
}

export default CartItem