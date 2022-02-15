// Dropdown menu mobile
const headerMenu = document.getElementById('header-menu')
const menuButton = document.getElementById('button-menu')
let isOpen = false;

menuButton.addEventListener('click', () => {
	if (isOpen === false){
		isOpen = true;
		return headerMenu.classList.add("header__menu--open")
	}

	isOpen = false;
	return headerMenu.classList.remove("header__menu--open")

})