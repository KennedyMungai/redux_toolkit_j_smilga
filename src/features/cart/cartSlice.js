import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
	cartItems,
	amount: 4,
	total: 4,
	isLoading: true
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = []
		},
		removeItem: (state, action) => {
			const itemId = action.payload
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== itemId
			)
		},
		increaseItem: (state, action) => {
			const cartItem = state.cartItems.find(
				(item) => item.id === action.payload.id
			)

			state.amount = state.amount + 1
		},
		decreaseItem: (state, action) => {
			const cartItem = state.cartItems.find(
				(item) => item.id === action.payload.id
			)

			state.amount = state.amount -= 1
		},
		calculateTotals: (state) => {
			let amount = 0
			let total = 0

			state.cartItems.forEach(
				(item) => (
					(amount += item.amount), (total += item.amount * item.price)
				)
			)

			state.amount = amount
			state.total = total
		}
	},
	extraReducers: {}
})

export const {
	clearCart,
	removeItem,
	increaseItem,
	decreaseItem,
	calculateTotals
} = cartSlice.actions

export default cartSlice.reducer
