import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const CartContainer = () => {
	const { cartItem, total, amount } = useSelector((state) => state.cart)

	return <div>cartContainer</div>
}

export default CartContainer
