import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {   
                    cartItems.length ?
                    cartItems.map( cartItem => <CartItem item={cartItem} /> )
                    : <span className='empty-message'>Your cart is empty</span>
                }
            </div>

            <CustomButton onClick={ () => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }} >GOT TO CHECKOUT</CustomButton>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

// mapDispatchToProps is not written for toggelCartHidden action 
// because connect provides dispatch as a by default prop to the component

export default withRouter(connect(mapStateToProps)(CartDropdown));