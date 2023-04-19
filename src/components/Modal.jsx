import React from 'react'

const Modal = () => {
	return (
		<aside>
			<div className='modal'>
				<h4>Remove all items from your shopping cart?</h4>
				<div className='btn-container'>
					<button className='btn confirm-btn'>Confirm</button>
					<button className='btn clear-btn'>Cancel</button>
				</div>
			</div>
		</aside>
	)
}

export default Modal
