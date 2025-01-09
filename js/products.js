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

// swiper slide
const swiper = new Swiper('.products-carousel', {
	slidesPerView: 4,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})

// attach quantity handlers
function attachQuantityHandlers() {
	document.querySelectorAll('.product-item').forEach(product => {
		const quantityInput = product.querySelector('.input-number')
		const minusButton = product.querySelector('.quantity-left-minus')
		const plusButton = product.querySelector('.quantity-right-plus')

		plusButton.addEventListener('click', () => {
			let quantity = parseInt(quantityInput.value, 10)
			quantityInput.value = quantity + 1
		})

		minusButton.addEventListener('click', () => {
			let quantity = parseInt(quantityInput.value, 10)
			if (quantity > 1) {
				quantityInput.value = quantity - 1
			}
		})
	})
}

// render all products
function renderAllProducts() {
	productGrid.innerHTML = ''

	ALL_PRODUCTS.forEach(product => {
		const productElement = document.createElement('div')
		productElement.classList.add('col')

		productElement.innerHTML = `
            <div class="col">
                      <div class="product-item">
                        <span class="badge bg-success position-absolute m-3">${product.discount}</span>
                        <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a>
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
                              <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1">
                              <span class="input-group-btn">
                                  <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                      <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
                                  </button>
                              </span>
                          </div>
                          <a href="#" class="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
                        </div>
                      </div>
                    </div>
        `

		productGrid.appendChild(productElement)
	})
}

document.addEventListener('DOMContentLoaded', () => {
	renderAllProducts()
})

// render fruits & veges
function renderFruitsAndVeges() {
	fruitsAndVegesGrid.innerHTML = ''

	FRUITS_AND_VEGES.forEach(product => {
		const productElement = document.createElement('div')
		productElement.classList.add('col')

		productElement.innerHTML = `
            <div class="col">
                      <div class="product-item">
                        <span class="badge bg-success position-absolute m-3">${product.discount}</span>
                        <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a>
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
                              <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1">
                              <span class="input-group-btn">
                                  <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                      <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
                                  </button>
                              </span>
                          </div>
                          <a href="#" class="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
                        </div>
                      </div>
                    </div>
        `

		fruitsAndVegesGrid.appendChild(productElement)
	})
}

document.addEventListener('DOMContentLoaded', () => {
	renderFruitsAndVeges()
})

// render juices
function renderJuices() {
	juicesGrid.innerHTML = ''

	JUICES.forEach(product => {
		const productElement = document.createElement('div')
		productElement.classList.add('col')

		productElement.innerHTML = `
            <div class="col">
                      <div class="product-item">
                        <span class="badge bg-success position-absolute m-3">${product.discount}</span>
                        <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a>
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
                              <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1">
                              <span class="input-group-btn">
                                  <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                      <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
                                  </button>
                              </span>
                          </div>
                          <a href="#" class="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
                        </div>
                      </div>
                    </div>
        `

		juicesGrid.appendChild(productElement)
	})
}

document.addEventListener('DOMContentLoaded', () => {
	renderJuices()
})

// render best selling products
function renderBestSellProducts() {
	bestSellProducts.innerHTML = ''

	BEST_SELL_PRODUCTS.forEach(product => {
		const productElement = document.createElement('div')
		productElement.classList.add('product-item', 'swiper-slide')

		productElement.innerHTML = `
            <div>
                  <span class="badge bg-success position-absolute m-3">${product.discount}</span>
                  <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a>
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
                        <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1">
                        <span class="input-group-btn">
                            <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
                            </button>
                        </span>
                    </div>
                    <a href="#" class="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
                  </div>
                </div>
        `

		bestSellProducts.appendChild(productElement)
	})
	swiper.update()
}

document.addEventListener('DOMContentLoaded', () => {
	renderBestSellProducts()
})

// render most popular
function renderMostPopularProducts() {
	mostPopularProducts.innerHTML = ''

	MOST_POPULAR_PRODUCTS.forEach(product => {
		const productElement = document.createElement('div')
		productElement.classList.add('product-item', 'swiper-slide')

		productElement.innerHTML = `
            <div>
                  <span class="badge bg-success position-absolute m-3">${product.discount}</span>
                  <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a>
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
                        <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1">
                        <span class="input-group-btn">
                            <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
                            </button>
                        </span>
                    </div>
                    <a href="#" class="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
                  </div>
                </div>
        `

		mostPopularProducts.appendChild(productElement)
	})
	swiper.update()
}

document.addEventListener('DOMContentLoaded', () => {
	renderMostPopularProducts()
})

// render just arrived
function renderJustArrivedProducts() {
	justArrivedProducts.innerHTML = ''

	JUST_ARRIVED_PRODUCTS.forEach(product => {
		const productElement = document.createElement('div')
		productElement.classList.add('product-item', 'swiper-slide')

		productElement.innerHTML = `
            <div>
                  <span class="badge bg-success position-absolute m-3">${product.discount}</span>
                  <a href="#" class="btn-wishlist"><svg width="24" height="24"><use xlink:href="#heart"></use></svg></a>
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
                        <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1">
                        <span class="input-group-btn">
                            <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
                            </button>
                        </span>
                    </div>
                    <a href="#" class="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
                  </div>
                </div>
        `

		justArrivedProducts.appendChild(productElement)
	})
	attachQuantityHandlers()
	swiper.update()
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
              <a href="#" class="btn-wishlist">
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
            <button class="btn btn-primary btn-lg w-100">Add to Cart 🛒</button>
            <a class="btn btn-lg btn-outline-light w-100 product-page-link" href="index.html">Back to Products</a>
          </div>
        </div>
      </div>
    `)
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
