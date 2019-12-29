window.addEventListener("scroll",function(){
	const navbar=document.getElementsByClassName("navbar")[0]
	if(window.pageYOffset<50) {
		navbar.classList.add("shrink")
	}	else {
		navbar.classList.remove("shrink")
	}
})