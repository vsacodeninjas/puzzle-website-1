let dialog = document.querySelector('[greetdialog]');

dialog.innerHTML = `
<dialog style="z-index: 1000;" id="dialog">
	<h2>Greetings! Welcome to the Solve the puzzle challenge</h2>
	<p>This is the ${dialog.getAttribute('page')} challenge!</p>
	<h4>Good Luck!!!</h4>
	<form method="dialog">
		<button autofocus>Let's Go!</button>
	</form>
</dialog>  
`

document.querySelector('#dialog').showModal();open