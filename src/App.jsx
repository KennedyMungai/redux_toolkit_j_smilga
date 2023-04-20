import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'

function App() {
	const dispatch = useDispatch()
	const { cartItems, isLoading } = useSelector((state) => state.cart)
	const { isOpen } = useSelector((state) => state.modal)

	useEffect(() => {
		dispatch(calculateTotals())
	}, [cartItems])

	useEffect(() => {
		getCartItems('Jean Jackets')
	}, [])

	if (isLoading) {
		return (
			<div className='loading'>
				<h1>Loading...</h1>
			</div>
		)
	}

	return (
		<main>
			{isOpen && <Modal />}
			<Navbar />
			<CartContainer />
		</main>
	)
}
export default App
