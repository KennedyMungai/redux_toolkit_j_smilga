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
		increase: (state, action) => {
			const cartItem = state.cartItems.find(
				(item) => item.id === action.payload.id
			)

			cartItem.amount += 1
		},
		decrease: (state, action) => {
			const cartItem = state.cartItems.find(
				(item) => item.id === action.payload.id
			)

			state.amount -= 1
		}
	}
})

export const { clearCart } = cartSlice.actions

export default cartSlice.reducer
