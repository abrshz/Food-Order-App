import { createContext, useReducer } from "react";

const CartContext= createContext({
    items: [],
    addItem: (item) =>{},
    removeItem: (id) => {}
})

function cartReducer (state, action) {
    if (action.type === 'ADD_ITEM') {
        // Update the state to add a meal item
        const existingCartItemIndex = state.items.findIndex((item) => item.id)

        const updatedItems = [...state.items]
        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({...action.item, quantity: 1})
        }
        return{...state , items: updatedItems}
    }
    if (action.type === 'REMOVE_ITEM') {
        // Remove an item form the state
         const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)

         const existingCartItem = state.items[existingCartItemIndex]

         if (existingCartItem.quantity === 1) {
            const updatedItems = [...state.items] 
            updatedItems.splice(existingCartItemIndex, 1)
         } else{
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            }
            updatedItems[existingCartItemIndex] = updatedItem
         }
         return {...state, items: updatedItems}
    }
    return state;
}

export function CartContextProvider({children}) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});

    function addItem(item) {
        dispatchCartAction({type: 'ADD_ITEM', item})
    }

    function removeItem(id) {
        dispatchCartAction({type: 'REMOVE_ITEM' , item})
    }

     const cartContext ={
        items: cart.items,
        addItem,
        removeItem
    }

    return <CartContext value={cartContext}>{children}</CartContext>
}

export default CartContext;