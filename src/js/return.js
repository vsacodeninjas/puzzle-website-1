let header = document.querySelector('[header]');
let newElement = document.createElement('div');
let page = header.getAttribute('page');

// console.log(page);
newElement.innerHTML = `
<!-- header -->
<header id="navBarHeader">
	<nav class="navBar">
		<div class="hleft">
			<a onclick="window.history.back()" id="btnBack" style="text-decoration: unset">Back<span></span></span></a>
		</div>
	</nav> 
</header>
`;

header.appendChild(newElement);
