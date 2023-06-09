import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://course-api.com/react-useReducer-cart-projects'

const initialState = {
	cartItems: [],
	amount: 4,
	total: 4,
	isLoading: true
}

export const getCartItems = createAsyncThunk(
	'cart/getCartItems',
	async (name, thunkAPI) => {
		// console.log(name)
		// console.log(thunkAPI)
		// console.log(thunkAPI.getState())

		try {
			const resp = await axios(url)
			return { data }
		} catch (error) {
			return thunkAPI.rejectWithValue('Something went wrong')
		}
	}
)

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
	extraReducers: {
		[getCartItems.pending]: (state) => {
			state.isLoading = true
		},
		[getCartItems.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.cartItems = payload
		},
		[getCartItems.rejected]: (state, { payload }) => {
			console.log(payload)
			state.isLoading = false
		}
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
