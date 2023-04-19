import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
	const { ampunt } = useSelector((state) => state.cart)
	const dispatch = useDispatch()

	return <div>Navbar</div>
}

export default Navbar
