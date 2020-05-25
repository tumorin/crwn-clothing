import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import CarItem from '../cart-item/cart-item.component';


const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(carItem=><CarItem key={carItem.id} item={carItem}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
const MapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(MapStateToProps,null)(CartDropdown);
