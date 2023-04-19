import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
	const { amount } = useSelector((state) => state.cart)
	const dispatch = useDispatch()

	return (
		<nav>
			<h3>redux toolkit</h3>
			<div className='nav-container'>
				{/* <CartIcon /> */}
				<img src={SlBasket} />
				<div className='amount-container'>
					<p className='total-amount'>{amount}</p>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
