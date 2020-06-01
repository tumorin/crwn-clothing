import React from 'react';
import {connect} from 'react-redux';
import {toddleCartHidden} from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {selectCartItemsCount} from '..//..//redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import './cart-icon.styles.scss';

const CartIcon = ({toddleCartHidden,itemCount}) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-item' onClick={toddleCartHidden}/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toddleCartHidden: () => dispatch(toddleCartHidden())
})  

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);