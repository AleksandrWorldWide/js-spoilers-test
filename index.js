window.onload = init

function init() {

	const spoilers = document.querySelectorAll('[data-spoiler]')

	spoilers.forEach(item => {
		item.addEventListener('click', show)
	})

	function show(e) {
		// Аккордеон
		// spoilers.forEach(item => item.classList.remove('active'))

		const name = e.target
		if (name.getAttribute('data-spoiler')) {
			name.classList.toggle('active')
		} else if (name.tagName != 'DIV'){
			name.parentNode.parentNode.classList.toggle('active')
		} else {
			name.parentNode.classList.toggle('active')
		}
		
		
	}
}