document.addEventListener('DOMContentLoaded', function () {
	const cartItemsContainer = document.getElementById('cart-items')
	const cartCountElement = document.getElementById('cart-count')
	const cartTotalElement = document.getElementById('cart-total')
	const cartTotalHeaderElement = document.getElementById('cart-total-header')

	// get Cart from localStorage
	function loadCart() {
		const cart = JSON.parse(localStorage.getItem('cart')) || []
		renderCart(cart)
	}

	window.loadCart = loadCart

	// render Cart
	function renderCart(cart) {
		cartItemsContainer.innerHTML = ''
		let total = 0

		cart.forEach((item, index) => {
			const listItem = document.createElement('li')
			listItem.classList.add(
				'list-group-item',
				'd-flex',
				'justify-content-between',
				'lh-sm'
			)

			listItem.innerHTML = `
        <div>
          <h6 class="my-0">${item.name}</h6>
          <small class="text-body-secondary">Quantity: ${item.quantity}</small>
        </div>
        <div>
          <span class="text-body-secondary">$${
						item.price * item.quantity
					}</span>
          <button class="btn btn-sm btn-danger ms-2 remove-item" data-index="${index}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
          </button>
        </div>
      `

			cartItemsContainer.appendChild(listItem)
			total += item.price * item.quantity
		})

		// update total price & quantity
		cartCountElement.textContent = cart.length
		cartTotalElement.textContent = `$${total}`
		cartTotalHeaderElement.textContent = `$${total}`
	}

	// remove product from Cart
	function removeFromCart(index) {
		const cart = JSON.parse(localStorage.getItem('cart')) || []
		cart.splice(index, 1)
		localStorage.setItem('cart', JSON.stringify(cart))
		loadCart()
	}

	cartItemsContainer.addEventListener('click', function (event) {
		if (event.target.closest('.remove-item')) {
			const index = event.target.closest('.remove-item').dataset.index
			removeFromCart(index)
		}
	})

	loadCart()
})
