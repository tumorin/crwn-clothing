import React from 'react';
import {connect} from 'react-redux';
import {toddleCartHidden} from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// import {React as ShoppingIcon} from './shopping-bag.svg'

import './cart-icon.styles.scss';

const CartIcon = ({toddleCartHidden}) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-item' onClick={toddleCartHidden}/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toddleCartHidden: () => dispatch(toddleCartHidden())
})  

const mapStateToProps = (state) => ({
    cartHidden: state.cart.hidden
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);