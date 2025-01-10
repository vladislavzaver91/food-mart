import PRODUCTS from './products.data.js'

const {
	ALL_PRODUCTS,
	FRUITS_AND_VEGES,
	JUICES,
	BEST_SELL_PRODUCTS,
	MOST_POPULAR_PRODUCTS,
	JUST_ARRIVED_PRODUCTS,
} = PRODUCTS

const productGrid = document.getElementById('productGrid')
const fruitsAndVegesGrid = document.getElementById('fruitsAndVegesGrid')
const juicesGrid = document.getElementById('juicesGrid')
const bestSellProducts = document.getElementById('bestSellProducts')
const mostPopularProducts = document.getElementById('mostPopularProducts')
const justArrivedProducts = document.getElementById('justArrivedProducts')

// render all products
function renderAllProducts() {
	// attach quantity handlers
	function attachQuantityHandlers() {
		document.querySelectorAll('.all-products').forEach(product => {
			const quantityInput = product.querySelector('.input-number')
			const minusButton = product.querySelector('.quantity-left-minus')
			const plusButton = product.querySelector('.quantity-right-plus')

			plusButton.addEventListener('click', () => {
				let quantity = parseInt(quantityInput.value, 10) || 0
				quantityInput.value = quantity + 1
			})

			minusButton.addEventListener('click', () => {
				let quantity = parseInt(quantityInput.value, 10) || 1
				if (quantity > 1) {
					quantityInput.value = quantity - 1
				}
			})
		})
	}

	productGrid.innerHTML = ''

	ALL_PRODUCTS.forEach((product, index) => {
		const productElement = document.createElement('div')
		productElement.classList.add('col')

		productElement.innerHTML = `
            <div class="col">
                      <div class="product-item all-products" data-product-index="${index}">
                        <span class="badge bg-success position-absolute m-3">${product.discount}</span>
                        <a class="add-to-favorites btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a>
                        <figure>
                          <a href="product.html?id=${product.id}" title="${product.name}">
                            <img src="${product.image}"  class="tab-image">
                          </a>
                        </figure>
                        <h3>${product.name}</h3>
                        <span class="qty">${product.unit}</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlink:href="#star-solid"></use></svg> ${product.rating}</span>
                        <span class="price">${product.price}</span>
                        <div class="d-flex align-items-center justify-content-between">
                          <div class="input-group product-qty">
                              <span class="input-group-btn">
                                  <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use xlink:href="#minus"></use></svg>
                                  </button>
                              </span>
                              <input type="text" name="quantity" class="form-control input-number" value="1" data-product-index="${index}">
                              <span class="input-group-btn">
                                  <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                      <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
                                  </button>
                              </span>
                          </div>
                          <a class="add-to-cart nav-link" >Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
                        </div>
                      </div>
                    </div>
        `

		productGrid.appendChild(productElement)
	})

	attachQuantityHandlers()
	productGrid.addEventListener('click', function (event) {
		const target = event.target.closest('.add-to-cart, .add-to-favorites')
		if (!target) return

		const productItem = event.target.closest('.product-item')
		const productIndex = productItem.dataset.productIndex
		const product = ALL_PRODUCTS[productIndex]

		const quantityInput = productItem.querySelector('.input-number')
		const quantity = parseInt(quantityInput.value, 10) || 1

		if (target.classList.contains('add-to-cart')) {
			addToCart({ ...product, quantity })
			alert('Product added to cart!')
		} else if (target.classList.contains('add-to-favorites')) {
			addToFavorites({ ...product, quantity })
			alert('Product added to favorites!')
		}
	})
}

document.addEventListener('DOMContentLoaded', () => {
	renderAllProducts()
})

// render fruits & veges
function renderFruitsAndVeges() {
	// attach quantity handlers
	function attachQuantityHandlers() {
		document.querySelectorAll('.fruits-veges').forEach(product => {
			const quantityInput = product.querySelector('.input-number')
			const minusButton = product.querySelector('.quantity-left-minus')
			const plusButton = product.querySelector('.quantity-right-plus')

			plusButton.addEventListener('click', () => {
				let quantity = parseInt(quantityInput.value, 10) || 0
				quantityInput.value = quantity + 1
			})

			minusButton.addEventListener('click', () => {
				let quantity = parseInt(quantityInput.value, 10) || 1
				if (quantity > 1) {
					quantityInput.value = quantity - 1
				}
			})
		})
	}

	fruitsAndVegesGrid.innerHTML = ''

	FRUITS_AND_VEGES.forEach((product, index) => {
		const productElement = document.createElement('div')
		productElement.classList.add('col')

		productElement.innerHTML = `
		<div class="col">
							<div class="product-item fruits-veges" data-product-index="${index}">
								<span class="badge bg-success position-absolute m-3">${product.discount}</span>
								<a class="add-to-favorites btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a>
								<figure>
									<a href="product.html?id=${product.id}" title="${product.name}">
										<img src="${product.image}"  class="tab-image">
									</a>
								</figure>
								<h3>${product.name}</h3>
								<span class="qty">${product.unit}</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlink:href="#star-solid"></use></svg> ${product.rating}</span>
								<span class="price">${product.price}</span>
								<div class="d-flex align-items-center justify-content-between">
									<div class="input-group product-qty">
											<span class="input-group-btn">
													<button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
														<svg width="16" height="16"><use xlink:href="#minus"></use></svg>
													</button>
											</span>
											<input type="text" name="quantity" class="form-control input-number" value="1" data-product-index="${index}">
											<span class="input-group-btn">
													<button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
															<svg width="16" height="16"><use xlink:href="#plus"></use></svg>
													</button>
											</span>
									</div>
									<a class="add-to-cart nav-link" >Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
								</div>
							</div>
						</div>
`

		fruitsAndVegesGrid.appendChild(productElement)
	})

	attachQuantityHandlers()
	fruitsAndVegesGrid.addEventListener('click', function (event) {
		const target = event.target.closest('.add-to-cart, .add-to-favorites')
		if (!target) return

		const productItem = event.target.closest('.product-item')
		const productIndex = productItem.dataset.productIndex
		const product = FRUITS_AND_VEGES[productIndex]

		const quantityInput = productItem.querySelector('.input-number')
		const quantity = parseInt(quantityInput.value, 10) || 1

		if (target.classList.contains('add-to-cart')) {
			addToCart({ ...product, quantity })
			alert('Product added to cart!')
		} else if (target.classList.contains('add-to-favorites')) {
			addToFavorites({ ...product, quantity })
			alert('Product added to favorites!')
		}
	})
}

document.addEventListener('DOMContentLoaded', () => {
	renderFruitsAndVeges()
})

// render juices
function renderJuices() {
	// attach quantity handlers
	function attachQuantityHandlers() {
		document.querySelectorAll('.juices').forEach(product => {
			const quantityInput = product.querySelector('.input-number')
			const minusButton = product.querySelector('.quantity-left-minus')
			const plusButton = product.querySelector('.quantity-right-plus')

			plusButton.addEventListener('click', () => {
				let quantity = parseInt(quantityInput.value, 10) || 0
				quantityInput.value = quantity + 1
			})

			minusButton.addEventListener('click', () => {
				let quantity = parseInt(quantityInput.value, 10) || 1
				if (quantity > 1) {
					quantityInput.value = quantity - 1
				}
			})
		})
	}

	juicesGrid.innerHTML = ''

	JUICES.forEach((product, index) => {
		const productElement = document.createElement('div')
		productElement.classList.add('col')

		productElement.innerHTML = `
		<div class="col">
							<div class="product-item juices" data-product-index="${index}">
								<span class="badge bg-success position-absolute m-3">${product.discount}</span>
								<a class="add-to-favorites btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a>
								<figure>
									<a href="product.html?id=${product.id}" title="${product.name}">
										<img src="${product.image}"  class="tab-image">
									</a>
								</figure>
								<h3>${product.name}</h3>
								<span class="qty">${product.unit}</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlink:href="#star-solid"></use></svg> ${product.rating}</span>
								<span class="price">${product.price}</span>
								<div class="d-flex align-items-center justify-content-between">
									<div class="input-group product-qty">
											<span class="input-group-btn">
													<button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
														<svg width="16" height="16"><use xlink:href="#minus"></use></svg>
													</button>
											</span>
											<input type="text" name="quantity" class="form-control input-number" value="1" data-product-index="${index}">
											<span class="input-group-btn">
													<button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
															<svg width="16" height="16"><use xlink:href="#plus"></use></svg>
													</button>
											</span>
									</div>
									<a class="add-to-cart nav-link" >Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
								</div>
							</div>
						</div>
`

		juicesGrid.appendChild(productElement)
	})

	attachQuantityHandlers()
	juicesGrid.addEventListener('click', function (event) {
		const target = event.target.closest('.add-to-cart, .add-to-favorites')
		if (!target) return

		const productItem = event.target.closest('.product-item')
		const productIndex = productItem.dataset.productIndex
		const product = JUICES[productIndex]

		const quantityInput = productItem.querySelector('.input-number')
		const quantity = parseInt(quantityInput.value, 10) || 1

		if (target.classList.contains('add-to-cart')) {
			addToCart({ ...product, quantity })
			alert('Product added to cart!')
		} else if (target.classList.contains('add-to-favorites')) {
			addToFavorites({ ...product, quantity })
			alert('Product added to favorites!')
		}
	})
}

document.addEventListener('DOMContentLoaded', () => {
	renderJuices()
})

// render best selling products
function renderBestSellProducts() {
	bestSellProducts.innerHTML = ''
	// attach quantity handlers
	function attachQuantityHandlers() {
		document.querySelectorAll('.best-selling').forEach(product => {
			const quantityInput = product.querySelector('.input-number')
			const minusButton = product.querySelector('.quantity-left-minus')
			const plusButton = product.querySelector('.quantity-right-plus')

			plusButton.addEventListener('click', () => {
				let quantity = parseInt(quantityInput.value, 10) || 0
				quantityInput.value = quantity + 1
			})

			minusButton.addEventListener('click', () => {
				let quantity = parseInt(quantityInput.value, 10) || 1
				if (quantity > 1) {
					quantityInput.value = quantity - 1
				}
			})
		})
	}

	// swiper slide
	const bestSellingSwiper = new Swiper('.best-selling-carousel', {
		slidesPerView: 4,
		spaceBetween: 20,
		navigation: {
			nextEl: '.best-selling-next',
			prevEl: '.best-selling-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})

	BEST_SELL_PRODUCTS.forEach((product, index) => {
		const productElement = document.createElement('div')
		productElement.classList.add('product-item', 'best-selling', 'swiper-slide')

		productElement.innerHTML = `
            <div data-product-index="${index}">
                  <span class="badge bg-success position-absolute m-3">${product.discount}</span>
                  <a class="add-to-favorites btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a>
                  <figure>
                    <a href="product.html?id=${product.id}" title="${product.name}">
                      <img src="${product.image}" alt="${product.name}"  class="tab-image">
                    </a>
                  </figure>
                  <h3>${product.name}</h3>
                  <span class="qty">${product.unit}</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlink:href="#star-solid"></use></svg>${product.rating}</span>
                  <span class="price">${product.price}</span>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="input-group product-qty">
                        <span class="input-group-btn">
                            <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              <svg width="16" height="16"><use xlink:href="#minus"></use></svg>
                            </button>
                        </span>
                        <input type="text" name="quantity" class="form-control input-number" value="1" data-product-index="${index}">
                        <span class="input-group-btn">
                            <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
                            </button>
                        </span>
                    </div>
                    <a class="add-to-cart nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
                  </div>
                </div>
        `

		bestSellProducts.appendChild(productElement)
	})

	attachQuantityHandlers()
	bestSellProducts.addEventListener('click', function (event) {
		const target = event.target.closest('.add-to-cart, .add-to-favorites')
		if (!target) return

		const productItem = event.target.closest('.product-item')
		const productIndex = [...bestSellProducts.children].indexOf(productItem)
		const product = BEST_SELL_PRODUCTS[productIndex]

		const quantityInput = productItem.querySelector('.input-number')
		const quantity = parseInt(quantityInput.value, 10) || 1

		if (target.classList.contains('add-to-cart')) {
			addToCart({ ...product, quantity })
			alert('Product added to cart!')
		} else if (target.classList.contains('add-to-favorites')) {
			addToFavorites({ ...product, quantity })
			alert('Product added to favorites!')
		}
	})

	bestSellingSwiper.update()
}

document.addEventListener('DOMContentLoaded', () => {
	renderBestSellProducts()
})

// render most popular
function renderMostPopularProducts() {
	mostPopularProducts.innerHTML = ''
	// attach quantity handlers
	function attachQuantityHandlers() {
		document.querySelectorAll('.most-popular').forEach(product => {
			const quantityInput = product.querySelector('.input-number')
			const minusButton = product.querySelector('.quantity-left-minus')
			const plusButton = product.querySelector('.quantity-right-plus')

			plusButton.addEventListener('click', () => {
				let quantity = parseInt(quantityInput.value, 10) || 0
				quantityInput.value = quantity + 1
			})

			minusButton.addEventListener('click', () => {
				let quantity = parseInt(quantityInput.value, 10) || 1
				if (quantity > 1) {
					quantityInput.value = quantity - 1
				}
			})
		})
	}
	// swiper slide
	const mostPopularSwiper = new Swiper('.most-popular-carousel', {
		slidesPerView: 4,
		spaceBetween: 20,
		navigation: {
			nextEl: '.most-popular-next',
			prevEl: '.most-popular-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})

	MOST_POPULAR_PRODUCTS.forEach((product, index) => {
		const productElement = document.createElement('div')
		productElement.classList.add('product-item', 'most-popular', 'swiper-slide')

		productElement.innerHTML = `
            <div data-product-index="${index}">
                  <span class="badge bg-success position-absolute m-3">${product.discount}</span>
                  <a class="add-to-favorites btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a>
                  <figure>
                    <a href="product.html?id=${product.id}" title="${product.name}">
                      <img src="${product.image}" alt="${product.name}"  class="tab-image">
                    </a>
                  </figure>
                  <h3>${product.name}</h3>
                  <span class="qty">${product.unit}</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlink:href="#star-solid"></use></svg>${product.rating}</span>
                  <span class="price">${product.price}</span>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="input-group product-qty">
                        <span class="input-group-btn">
                            <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              <svg width="16" height="16"><use xlink:href="#minus"></use></svg>
                            </button>
                        </span>
                        <input type="text" name="quantity" class="form-control input-number" value="1" data-product-index="${index}">
                        <span class="input-group-btn">
                            <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
                            </button>
                        </span>
                    </div>
                    <a class="add-to-cart nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
                  </div>
                </div>
        `

		mostPopularProducts.appendChild(productElement)
	})

	attachQuantityHandlers()
	mostPopularProducts.addEventListener('click', function (event) {
		const target = event.target.closest('.add-to-cart, .add-to-favorites')
		if (!target) return

		const productItem = event.target.closest('.product-item')
		const productIndex = [...mostPopularProducts.children].indexOf(productItem)
		const product = MOST_POPULAR_PRODUCTS[productIndex]

		const quantityInput = productItem.querySelector('.input-number')
		const quantity = parseInt(quantityInput.value, 10) || 1

		if (target.classList.contains('add-to-cart')) {
			addToCart({ ...product, quantity })
			alert('Product added to cart!')
		} else if (target.classList.contains('add-to-favorites')) {
			addToFavorites({ ...product, quantity })
			alert('Product added to favorites!')
		}
	})

	mostPopularSwiper.update()
}

document.addEventListener('DOMContentLoaded', () => {
	renderMostPopularProducts()
})

// render just arrived
function renderJustArrivedProducts() {
	justArrivedProducts.innerHTML = ''
	// attach quantity handlers
	function attachQuantityHandlers() {
		document.querySelectorAll('.just-arrived').forEach(product => {
			const quantityInput = product.querySelector('.input-number')
			const minusButton = product.querySelector('.quantity-left-minus')
			const plusButton = product.querySelector('.quantity-right-plus')

			plusButton.addEventListener('click', () => {
				let quantity = parseInt(quantityInput.value, 10) || 0
				quantityInput.value = quantity + 1
			})

			minusButton.addEventListener('click', () => {
				let quantity = parseInt(quantityInput.value, 10) || 1
				if (quantity > 1) {
					quantityInput.value = quantity - 1
				}
			})
		})
	}
	// swiper slide
	const justArrivedSwiper = new Swiper('.just-arrived-carousel', {
		slidesPerView: 4,
		spaceBetween: 20,
		navigation: {
			nextEl: '.just-arrived-next',
			prevEl: '.just-arrived-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})

	JUST_ARRIVED_PRODUCTS.forEach((product, index) => {
		const productElement = document.createElement('div')
		productElement.classList.add('product-item', 'just-arrived', 'swiper-slide')

		productElement.innerHTML = `
            <div data-product-index="${index}">
                  <span class="badge bg-success position-absolute m-3">${product.discount}</span>
                  <a class="add-to-favorites btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a>
                  <figure>
                    <a href="product.html?id=${product.id}" title="${product.name}">
                      <img src="${product.image}" alt="${product.name}"  class="tab-image">
                    </a>
                  </figure>
                  <h3>${product.name}</h3>
                  <span class="qty">${product.unit}</span><span class="rating"><svg width="24" height="24" class="text-primary"><use xlink:href="#star-solid"></use></svg>${product.rating}</span>
                  <span class="price">${product.price}</span>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="input-group product-qty">
                        <span class="input-group-btn">
                            <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                              <svg width="16" height="16"><use xlink:href="#minus"></use></svg>
                            </button>
                        </span>
                        <input type="text" name="quantity" class="form-control input-number" value="1" data-product-index="${index}">
                        <span class="input-group-btn">
                            <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
                            </button>
                        </span>
                    </div>
                    <a class="add-to-cart nav-link" >Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
                  </div>
                </div>
        `
		justArrivedProducts.appendChild(productElement)
	})

	attachQuantityHandlers()
	justArrivedProducts.addEventListener('click', function (event) {
		const target = event.target.closest('.add-to-cart, .add-to-favorites')
		if (!target) return

		const productItem = event.target.closest('.product-item')
		const productIndex = [...justArrivedProducts.children].indexOf(productItem)
		const product = JUST_ARRIVED_PRODUCTS[productIndex]

		const quantityInput = productItem.querySelector('.input-number')
		const quantity = parseInt(quantityInput.value, 10) || 1

		if (target.classList.contains('add-to-cart')) {
			addToCart({ ...product, quantity })
			alert('Product added to cart!')
		} else if (target.classList.contains('add-to-favorites')) {
			addToFavorites({ ...product, quantity })
			alert('Product added to favorites!')
		}
	})

	justArrivedSwiper.update()
}

document.addEventListener('DOMContentLoaded', () => {
	renderJustArrivedProducts()
})

// product-item page
$(document).ready(function () {
	function getProductIdFromUrl() {
		const urlParams = new URLSearchParams(window.location.search)
		return parseInt(urlParams.get('id'))
	}

	const productId = getProductIdFromUrl()

	const product =
		ALL_PRODUCTS.find(p => p.id === productId) ||
		FRUITS_AND_VEGES.find(p => p.id === productId) ||
		JUICES.find(p => p.id === productId) ||
		BEST_SELL_PRODUCTS.find(p => p.id === productId) ||
		MOST_POPULAR_PRODUCTS.find(p => p.id === productId) ||
		JUST_ARRIVED_PRODUCTS.find(p => p.id === productId)

	const $productDetails = $('#productDetails')

	if (product) {
		$productDetails.html(`
      <div class="product-page-container">
        <div class="product-page-grid">
          <div class="product-page-card">
            <!-- Значок скидки и кнопка избранного -->
            <div class="product-page-badge">
              <span class="badge bg-success">${product.discount}</span>
              <a id="add-to-favorites-btn" class="btn-wishlist">
                <svg width="24" height="24"><use xlink:href="#heart"></use></svg>
              </a>
            </div>
            <img id="product-image" src="${product.image}" alt="${product.name}" class="product-page-img" />
          </div>
          <div class="product-page-description">
            <h1 id="product-item" class="product-page-title">${product.name}</h1>
            <p class="product-page-price">Price: ${product.price}</p>
            <p class="rating">
              Rating 
              <svg width="24" height="24" class="text-primary">
                <use xlink:href="#star-solid"></use>
              </svg>
              ${product.rating}
            </p>
            <p class="product-page-unit">Unit: ${product.unit}</p>
            <p class="product-page-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula, eros eu sagittis faucibus, elit ex molestie urna, sed malesuada enim purus in magna. Nulla facilisi. Suspendisse potenti. Etiam ut diam vitae risus ultrices euismod. Fusce sit amet est in mauris faucibus sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula, eros eu sagittis faucibus, elit ex molestie urna, sed malesuada enim purus in magna. Nulla facilisi. Suspendisse potenti. Etiam ut diam vitae risus ultrices euismod. Fusce sit amet est in mauris faucibus sollicitudin.
            </p>
            <button id="add-to-cart-btn" class="btn btn-primary btn-lg w-100">Add to Cart 🛒</button>
            <a class="btn btn-lg btn-outline-light w-100 product-page-link" href="index.html">Back to Products</a>
          </div>
        </div>
      </div>
    `)

		$('#add-to-cart-btn').on('click', function () {
			addToCart(product)
			alert('Product added to cart!')
		})

		$('#add-to-favorites-btn').on('click', function () {
			addToFavorites(product)
			alert('Product added to favorites!')
		})
	} else {
		$productDetails.html(`
    <div class="alert alert-danger mt-5 text-center">
      <h2>Product not found</h2>
      <p>We couldn't find the product you were looking for. Please go back to the products page.</p>
      <a class="btn btn-secondary btn-lg mt-3" href="index.html">Back to Products</a>
    </div>
  `)
	}
})

// add to Cart
function addToCart(product) {
	let cart = JSON.parse(localStorage.getItem('cart')) || []

	const existingProduct = cart.find(p => p.id === product.id)

	if (existingProduct) {
		existingProduct.quantity += product.quantity
	} else {
		cart.push(product)
	}
	localStorage.setItem('cart', JSON.stringify(cart))

	window.loadCart()
}

// add to Favorites
function addToFavorites(product) {
	let favorites = JSON.parse(localStorage.getItem('favorites')) || []

	const existingProduct = favorites.find(p => p.id === product.id)

	if (existingProduct) {
		existingProduct.quantity += product.quantity
	} else {
		favorites.push(product)
	}
	localStorage.setItem('favorites', JSON.stringify(favorites))
}
