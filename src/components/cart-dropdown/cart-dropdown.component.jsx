import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import CarItem from '../cart-item/cart-item.component';
import {selectCartItems} from '..//..//redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toddleCartHidden} from '../../redux/cart/cart.actions';


const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   cartItems.length ? (
                cartItems.map(carItem=>
                (<CarItem key={carItem.id} item={carItem}/>
                ))
            ) : ( 
                <span className='empty-message'>Your cart is empty</span>
            )}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toddleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
    </div>
)
const MapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(MapStateToProps,null)(CartDropdown));
