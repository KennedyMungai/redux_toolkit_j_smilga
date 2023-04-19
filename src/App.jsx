import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import { calculateTotals } from './features/cart/cartSlice'

function App() {
	const dispatch = useDispatch()
	const { cartItems } = useSelector((state) => state.cart)

	useEffect(() => {
		dispatch(calculateTotals())
	}, [cartItems])

	return (
		<main>
			<Modal />
			<Navbar />
			<CartContainer />
		</main>
	)
}
export default App
