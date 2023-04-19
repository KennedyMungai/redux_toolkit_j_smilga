import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cartItems from '../cartItems'
import { openModal } from '../features/modal/modalSlice'
import CartItem from './CartItem'

const CartContainer = () => {
	const dispatch = useDispatch()

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
			<div>
				{cartItems.map((item) => {
					return <CartItem key={item.id} {...item} />
				})}
			</div>
			<footer>
				<hr />
				<div className='cart-total'>
					<h4>
						total <span>${total.toFixed(2)}</span>
					</h4>
				</div>
				<button
					className='btn clear-btn'
					onClick={() => dispatch(openModal())}
				>
					Clear Cart
				</button>
			</footer>
		</section>
	)
}

export default CartContainer
