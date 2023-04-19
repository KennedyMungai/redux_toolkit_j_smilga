import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const CartContainer = () => {
	const { cartItem, total, amount } = useSelector((state) => state.cart)

	if (amount < 1) {
		return (
			<section className='cart'>
				<header>
					<h2>Your Bag</h2>
					<h4 className='empty-cart'>is empty</h4>
				</header>
			</section>
		)
	}

	return (
		<section className='cart'>
			<header>
				<h2>Your Bag</h2>
			</header>
		</section>
	)
}

export default CartContainer
