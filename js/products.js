import PRODUCTS from './products.data.js'

const productGrid = document.getElementById('productGrid')

function renderProducts() {
	productGrid.innerHTML = ''

	PRODUCTS.forEach(product => {
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
	renderProducts()
})

// product-item page
function getProductIdFromUrl() {
	const urlParams = new URLSearchParams(window.location.search)
	return parseInt(urlParams.get('id'))
}

const productId = getProductIdFromUrl()
const product = PRODUCTS.find(p => p.id === productId)

const productDetails = document.getElementById('productDetails')

if (product) {
	productDetails.innerHTML = `
      <div class="product-details">
			<img id="product-image" src="${product.image}" alt="${product.name}" />
			<div class="product-info">
				<h1 id="product-name">${product.name}</h1>
				<p class="price" id="product-price">${product.price}</p>
				<p class="description">This is a great product with high quality.</p>
        <p>Rating: ${product.rating}</p>
        <p>Unit: ${product.unit}</p>
				<button class="w-100 btn btn-primary btn-lg">Add to Cart 🛒</button>
			</div>
      <a class='product-link' href="index.html">Back to products</a>
		</div>
  `
} else {
	productDetails.innerHTML = `<p>Product not found</p>`
}
