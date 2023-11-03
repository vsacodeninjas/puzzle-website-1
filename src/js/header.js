let header = document.querySelector('[header]');
let newElement = document.createElement('div');
let page = header.getAttribute('page');

newElement.innerHTML = `
<!-- header -->
<header id="navBarHeader">
	<nav class="navBar">
		<div class="hleft">
			<a onclick="goBack()" id="btnBack" style="text-decoration: unset; cursor: pointer;">Back<span></span></span></a>
		</div>
	</nav> 
</header>
`;

header.appendChild(newElement);

function goBack() {
	if (window.history.length > 1) {
		window.history.back();
	} else {
		window.location.replace('/');
	}
}