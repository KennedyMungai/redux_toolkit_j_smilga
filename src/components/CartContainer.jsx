import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import cartItems from '../cartItems'
import { clearCart } from '../features/cart/cartSlice'

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
					onClick={() => dispatch(clearCart())}
				>
					Clear Cart
				</button>
			</footer>
		</section>
	)
}

export default CartContainer
