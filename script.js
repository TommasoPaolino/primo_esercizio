const userTab = document.getElementById('user-pic-container')
const header = document.getElementsByTagName('header')[0] // there could be multiple elements with the same tag: we select the first since we know there's only one header
let bol_user = true
let bol_prenotazione = false
userTab.addEventListener('click', () => {
	//header.classList.toggle('yellow') //<--- this is the best way to toggle a class, but for explanation there's also a verbose version
	if(bol_user == false){
		document.getElementById("nickname").innerHTML = "Compratore13487548";
		document.getElementById("Prezzo").style.display = "block";
		document.getElementById("contatto").style.display = "block";
		document.getElementById("email").style.display = "block";
		document.getElementById("Storico_prezzo").style.display = "block";
		document.getElementById("titolo").style.display = "block";
		document.getElementById("titolo").style.display = "block";
		document.getElementById("prenotazione").style.display = "block";
		bol_user = true;
	}
	
	else if(bol_user == true){
		window.confirm("Alcune funzionalità non saranno più disponibili")
		document.getElementById("nickname").innerHTML = "Guest (Clicca per fare login)";
		document.getElementById("Prezzo").style.display = "none";
		document.getElementById("contatto").style.display = "none";
		document.getElementById("email").style.display = "none";
		document.getElementById("Storico_prezzo").style.display = "none";
		document.getElementById("titolo").style.display = "none";
		document.getElementById("prenotazione").style.display = "none";
		bol_user = false;
	}

})

document.getElementById("prenotazione").addEventListener('click', () => {
	if(bol_prenotazione == false &&  bol_user==true){
	document.getElementById('disponibilita_svg').setAttribute("fill", "red")
	document.getElementById("prenotazione_testo").innerHTML = "Togli Prenotazione";
	bol_prenotazione = true
	}
	else if(bol_prenotazione == true && bol_user==true){
		document.getElementById('disponibilita_svg').setAttribute("fill", "green")
		document.getElementById("prenotazione_testo").innerHTML = "Prenota visita";
		bol_prenotazione = false
	}
})
