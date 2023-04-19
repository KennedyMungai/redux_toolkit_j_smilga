import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
	cartItems,
	amount: 4,
	total: 0,
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

			cartItem.amount += 1
		},
		decreaseItem: (state, action) => {
			const cartItem = state.cartItems.find(
				(item) => item.id === action.payload.id
			)

			state.amount -= 1
		},
		calculateTotals: (state) => {}
	}
})

export const {
	clearCart,
	removeItem,
	increaseItem,
	decreaseItem,
	calculateTotals
} = cartSlice.actions

export default cartSlice.reducer
