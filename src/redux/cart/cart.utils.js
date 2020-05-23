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