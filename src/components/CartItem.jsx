import React from 'react'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'

const CartItem = ({ id, img, title, price, amount }) => {
	return (
		<article className='cart-item'>
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className='item-price'>${price}</h4>
			</div>
		</article>
	)
}

export default CartItem
