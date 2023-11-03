window.onload = function() {
	var randomId = Math.floor(Math.random() * 6) + 1;
	document.getElementById(randomId + "tryme").href = "/lv2";
}