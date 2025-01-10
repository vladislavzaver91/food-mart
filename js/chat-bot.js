document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('.user-form')

	form.addEventListener('submit', async function (event) {
		event.preventDefault()

		const name = form.querySelector('input[placeholder="Your name"]').value
		const city = form.querySelector('input[placeholder="City"]').value
		const phone = form.querySelector('input[placeholder="Phone number"]').value

		if (!name || !city || !phone) {
			alert('Please fill in all fields!')
			return
		}

		const message = `
🚀 Новая заявка!
👤 Имя: ${name}
🏙️ Город: ${city}
📞 Телефон: ${phone}
    `

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
			} else {
				alert(`Failed to send message: ${result.description}`)
			}
		} catch (error) {
			console.error('Error sending message:', error)
			alert('Error sending message.')
		}
	})
})
