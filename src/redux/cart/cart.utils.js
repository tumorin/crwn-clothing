export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existinCartItem = cartItems.find(item => item.id===cartItemToAdd.id);

    if (existinCartItem) {
        return cartItems.map( cartItem => (
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem,quantity: cartItem.quantity +1}
            : cartItem
        ))
    } else return [...cartItems,{...cartItemToAdd,quantity: 1}]
}

export const removeItemFromCart = (cartItems,cartItemToRemove) => {
    const existinCartItem = cartItems.find(item => item.id===cartItemToRemove.id);
    
    if (existinCartItem.quantity === 1) {
        return cartItems.filter( item => item.id != cartItemToRemove.id)
    }
     return cartItems.map (
         cartItem =>
         cartItem.id === cartItemToRemove ?
          {...cartItems,quantity: cartItem.quantity -1} 
        : cartItem
     )
}