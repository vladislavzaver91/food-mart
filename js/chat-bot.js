document.addEventListener('DOMContentLoaded', function () {
	const forms = document.querySelectorAll('form')

	forms.forEach(form => {
		form.addEventListener('submit', async function (event) {
			event.preventDefault()

			const isDiscountForm = form.classList.contains('discount-form')
			const isUserForm = form.classList.contains('user-form')

			let message = ''
			if (isDiscountForm) {
				const name = form.querySelector('input[name="name"]').value.trim()
				const email = form.querySelector('input[name="email"]').value.trim()
				const subscribe = form.querySelector('#subscribe').checked
					? 'Yes'
					: 'No'

				if (!name || !email) {
					alert('Please fill in all fields!')
					return
				}

				message = `
🎉 New Discount Request!
👤 Name: ${name}
📧 Email: ${email}
📰 Subscribed to Newsletter: ${subscribe}
                `
			} else if (isUserForm) {
				const name = form
					.querySelector('input[placeholder="Your name"]')
					.value.trim()
				const city = form
					.querySelector('input[placeholder="City"]')
					.value.trim()
				const phone = form
					.querySelector('input[placeholder="Phone number"]')
					.value.trim()

				if (!name || !city || !phone) {
					alert('Please fill in all fields!')
					return
				}

				const cartItems = JSON.parse(localStorage.getItem('cart')) || []
				if (cartItems.length === 0) {
					alert('Your cart is empty!')
					return
				}

				let orderDetails = ''
				let totalAmount = 0
				let totalQuantity = 0

				cartItems.forEach(item => {
					const itemTotal = item.price * item.quantity
					orderDetails += `
🛒 Product: ${item.name}
💵 Price: $${item.price}
📦 Quantity: ${item.quantity}
💰 Total amount: $${itemTotal}
---
`
					totalAmount += itemTotal
					totalQuantity += item.quantity
				})

				message = `
🚀 New application!
👤 Name: ${name}
🏙️ City: ${city}
📞 Phone: ${phone}

📋 Order details:
Total products: ${totalQuantity}
${orderDetails}
🔢 Total order amount: $${totalAmount}
                `
			}

			const BOT_TOKEN = '7567982022:AAHtqgUKGh8DZhuKe-Zm8qjSV8DgH6JEI6Q'
			const CHAT_ID = '-1002434738154'
			const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

			const payload = {
				chat_id: CHAT_ID,
				text: message,
				parse_mode: 'HTML',
			}

			try {
				const response = await fetch(URL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(payload),
				})

				const result = await response.json()

				if (result.ok) {
					alert('Message sent successfully!')
					form.reset()
				} else {
					alert(`Failed to send message: ${result.description}`)
				}
			} catch (error) {
				console.error('Error sending message:', error)
				alert('Error sending message.')
			}
		})
	})
})
