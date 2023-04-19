import React from 'react'
import { useDispatch } from 'react-redux'

const Modal = () => {
	const dispatch = useDispatch()

	return (
		<aside className='modal-container'>
			<div className='modal'>
				<h4>Remove all items from your shopping cart?</h4>
				<div className='btn-container'>
					<button className='btn confirm-btn' onClick={() => {}}>
						Confirm
					</button>
					<button className='btn clear-btn' onClick={() => {}}>
						Cancel
					</button>
				</div>
			</div>
		</aside>
	)
}

export default Modal
