function finishLevel() {
	let dialog = document.querySelector('[greetdialog]');

	dialog.innerHTML = `
	<dialog style="z-index: 1000;" id="dialog">
		<h2>Yoooo! Congratulations!!!</h2>
		<p>You've completed the ${dialog.getAttribute('page')} challenge!</p>
		<h4>Redirecting you to next level when presed the button!!!</h4>
		<form method="dialog">
			<button autofocus id="finishPressed">Let's Go!</button>
		</form>
	</dialog>  
	`

	document.querySelector('#dialog').showModal();open

	document.querySelector('#finishPressed').addEventListener('click', () => {
		window.location.href = nextlv
	})
}
