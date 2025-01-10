document.addEventListener('DOMContentLoaded', function () {
	const favoritesList = document.getElementById('favorites-list')

	// get favorite products
	const favorites = JSON.parse(localStorage.getItem('favorites')) || []

	function renderFavorites() {
		favoritesList.innerHTML = ''

		if (favorites.length === 0) {
			favoritesList.innerHTML =
				"<p class='text-center'>No favorite products yet.</p>"
			return
		}

		favorites.forEach((item, index) => {
			const listItem = document.createElement('li')
			listItem.className =
				'list-group-item d-flex justify-content-between align-items-center favorite-item'

			listItem.innerHTML = `
				<div class="d-flex align-items-center">
				<span class="badge bg-success position-absolute">${item.discount}</span>
				<a href="product.html?id=${item.id}" title="${item.name}">
					<img src="${item.image}" alt="${
				item.name
			}" class="me-3" style="width: 70px; height: 70px; object-fit: cover;">
			</a>
					<div>
						<h6 class="my-0">${item.name}</h6>
						<small class="text-muted">Price: $${item.price}</small>
						<p class="mb-0">Quantity: <strong>${item.quantity || 1}</strong></p>
					</div>
				</div>
				<div class="buttons">
					<button class="btn btn-sm btn-primary add-to-cart" data-index="${index}">Add to Cart</button>
					<button class="btn btn-sm btn-danger remove-favorite" data-index="${index}">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
							<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
						</svg>
					</button>
				</div>
			`

			favoritesList.appendChild(listItem)
		})
	}

	// add to Cart
	function addToCart(item) {
		let cart = JSON.parse(localStorage.getItem('cart')) || []

		const existingItem = cart.find(cartItem => cartItem.name === item.name)
		if (existingItem) {
			existingItem.quantity += item.quantity || 1
		} else {
			cart.push({ ...item, quantity: item.quantity || 1 })
		}

		localStorage.setItem('cart', JSON.stringify(cart))
		alert('Product added to cart!')

		window.loadCart()
	}

	favoritesList.addEventListener('click', function (event) {
		const index = event.target.closest('button')?.dataset.index
		if (index === undefined) return

		if (event.target.closest('.add-to-cart')) {
			addToCart(favorites[index])
		} else if (event.target.closest('.remove-favorite')) {
			favorites.splice(index, 1)
			localStorage.setItem('favorites', JSON.stringify(favorites))
			renderFavorites()
		}
	})

	renderFavorites()
})
