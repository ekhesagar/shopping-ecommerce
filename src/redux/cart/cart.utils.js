export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === existingCartItem.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity:1}]
}

export const removeItemFromCheckout = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(
        cartItem => cartItem.id === itemToRemove.id
    )

    if(existingItem.quantity === 1){
        return cartItems.filter( cartItem => cartItem.id !== itemToRemove.id )
    }

    return cartItems.map((cartItem) => cartItem.id === itemToRemove ? 
        {
            ...cartItem,
            quantity: cartItem.quantity - 1
        }
        : cartItem
    )
}