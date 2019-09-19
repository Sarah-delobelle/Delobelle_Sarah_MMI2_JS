//Exercice 1.1
var nb_1 = 1;
var nb_2 = 10;
var result_ex1= nb_1 + nb_2;

function Add(){
	document.getElementById('result-exo-1-1').innerHTML = result_ex1;
}

//Exercice 1.2
var nb_3 = 2;
var nb_4 = 3;
var result_ex1_2 = nb_3 * nb_4;

function Multiple(){
	document.getElementById('result-exo-1-2').innerHTML= result_ex1_2;
}

// Exercice 1.3
var nb_5 = 12;
var nb_6 = 5;
var result_ex1_3 = nb_5 / nb_6;

function Div(){
	document.getElementById('result-exo-1-3').innerHTML= result_ex1_3;
}
Div();

//Exercice 1.4
function Sous(){
	var nb_7= document.getElementById('nb_7').value;
	var nb_8= document.getElementById('nb_8').value;
	var result_ex1_4 = nb_7 - nb_8; 
	document.getElementById('ex1_result').innerHTML= result_ex1_4;
}

//Exercice 1.5
function Multi2(){
	var nb_9= document.getElementById('nb_9').value;
	var nb_10= document.getElementById('nb_10').value;
	var result_ex1_5 = nb_9 * nb_10; 
	document.getElementById('ex1-5_result').innerHTML= result_ex1_5;
}

//Exercice 2.1
function Div2(){
	var nb_11= document.getElementById('nb_11').value;
	var nb_12= document.getElementById('nb_12').value;
	var result_ex2_1 = nb_11 / nb_12; 
	document.getElementById('ex2-1_result').innerHTML= result_ex2_1;
}

//Exercice 2.2
function Add2(){
	var nb_13= document.getElementById('nb_13').value;
	var nb_14= document.getElementById('nb_14').value;
	var result_ex2_2 = nb_13*1 + nb_14*1; 
	document.getElementById('ex2-2_result').innerHTML= result_ex2_2;
}

// Exercice 3
var nb_15 = 82;
var nb_16 = 8;
var result_ex3 = nb_15 / nb_16;

function Division(){
	document.getElementById('result-exo-3').innerHTML= result_ex3;
}
window.onload = Division;

// Exercice 4.1
var i = 0;

function Add10(){
	i += 10;
	document.getElementById('result-exo-4').innerHTML= i;
}

// Exercice 4.2
function Div5(){
	i /= 5;
	document.getElementById('result-exo-4-1').innerHTML= i;
}

// Exercice 4.3
function Multi8(){
	i *= 8;
	document.getElementById('result-exo-4-3').innerHTML= i;
}

// Exercice 4.4
function Sous2(){
	i -= 2;
	document.getElementById('result-exo-4-4').innerHTML= i;
}

// Exercice 4.5
function AddSous(){
	i += 10;
	i -=2;
	document.getElementById('result-exo-4-5').innerHTML= i;
}

// Exercice 4.6
function Reset(){
	
	document.getElementById('result-exo-4-6').innerHTML= i=0;
}

// Exercice 5

var nombreRandom = Math.floor(Math.random() * (1000- 50) + 50);

function Alea(){
	document.getElementById('result-exo-5').innerHTML= nombreRandom;
}

Alea();

// Exercice 6

var a= 8;
var result_exo6= a / 2;
function Number(){

	document.getElementById('result-exo-6').innerHTML= result_exo6;
}

Number();

// Exercice 7

var b= 5;
var c= 10;
var result_exo7= c - b;
function Soustraction(){

	document.getElementById('result-exo-7').innerHTML= result_exo7;
}

Soustraction();

// Exercice 8

var d= 4;
var e= 8;
var f= 12;
var result_exo8= d / e;
var result_ex8_1= result_exo8 / f;
function Divresultat(){

	document.getElementById('result-exo-8').innerHTML= result_ex8_1;
}

Divresultat();

//Exercice 9
function Convertpounds(){
	var kg= document.getElementById('kg').value;
	var result_ex9 = kg * 1 / 0.45359; 
	document.getElementById('result-exo-9').innerHTML= result_ex9;
}

//Exercice 9_1
function Convertkg(){
	var pounds= document.getElementById('pounds').value;
	var result_ex9_1 = pounds * 0.45359 / 1; 
	document.getElementById('result-exo-9-1').innerHTML= result_ex9_1;
}

//Exercice 10
var phrase="";
function Ajouter(){
	var mot= document.getElementById('text').value;
	phrase= phrase + mot;
	document.getElementById('result-exo-10').innerHTML= phrase;
}

function Reset2(){
	document.getElementById('result-exo-10').innerHTML="";
}

// Exercice 11

var cote = Math.floor(Math.random() * (20- 0.5) + 0.5);

function Aleatoire(){
	
	cote = Math.floor(Math.random() * (20- 0.5) + 0.5);
	document.getElementById('result-exo-11-1').innerHTML= cote;
}

function Gain(){
	var mise= document.getElementById('mise').value;
	var result_exo_11= cote * mise;
	document.getElementById('result-exo-11').innerHTML= result_exo_11;
}

//Exercice 12

function Temps(){
	var km= document.getElementById('km').value;
	var result_exo_12= km * 60 / 1000;
	document.getElementById('result-exo-12').innerHTML= result_exo_12;
}

function KM(){
	var temps= document.getElementById('temps').value;
	var result_exo_12_1= temps * 1000 / 60;
	document.getElementById('result-exo-12-1').innerHTML= result_exo_12_1;
}

// Exercice 13

var message = 'Votre écran à une résolution de ' + screen.width;
if( screen.width >= 1920);
alert(message);

//Exercice 15

function Multiple(){
	var donnee= document.getElementById('multiple').value;
	if (donnee % 3 = 0){
		