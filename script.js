let words_array = ["МАЛИНА", "ЯБЛУКО", "ГАНТЕЛЯ", "УРОК", "КОМАНДА", "ДОТА", "РЕФРИЖЕРАТОР", "СВІТЛОФОР", "ЛАМПА", "КВІТКА", "НОУТБУК", "ЧАШКА"];
let word = "";
let mistakes = 0;
let guessed = 0;
let index = 1;


function start(){
	document.getElementById("start").style.display = "none";
	document.getElementById("user_enter").style.display = "inline-block";
	document.getElementById("lib").style.display = "inline-block";
}



function user(){
	document.getElementById("user_enter").style.display = "none";
	document.getElementById("lib").style.display = "none";
	document.getElementById("text").style.display = "inline-block";
	document.getElementById("ok").style.display = "inline-block";
}


function lib(){
	document.getElementById("user_enter").style.display = "none";
	document.getElementById("lib").style.display = "none";
	lib_choose();
}


function ok(){
	word = document.getElementById("text").value;
	word = word.toUpperCase();
	console.log(word);
	document.getElementById("text").value = "";
	document.getElementById("ok").style.display = "none";
	document.getElementById("apply").style.display = "inline-block";
	alert("Введи наступну літеру слова");
}



function lib_choose(){
	random_index = Math.floor(Math.random() * words_array.length);
	word = words_array[random_index];
	console.log(word);
	document.getElementById("text").style.display = "inline-block";
	document.getElementById("apply").style.display = "inline-block";
	alert("Введи наступну літеру слова");
}



function next(){
	guessed = word[0];
	let char = document.getElementById("text").value;
	char = char.toUpperCase();
	if (char == word[index]){
		guessed += word[index];
		index++;
		document.getElementById("guessed_word").textContent = guessed;
		
	}
	else {
		mistakes++;
		alert("Не вгадав! Кількість помилок: " + mistakes);
	}
	if (index >= word.length){
		alert("ТИ ВИГРАВ!");
	}
	if (mistakes >= 10){
		alert("ТИ ПРОГРАВ!");
	}
	document.getElementById("text").value = "";
	console.log(guessed);

}













