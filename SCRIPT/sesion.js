let Casa_Numero = [ { Numero : -1 , Click : false , Inicio : true } ];
let Dispositivo = [
	{ Id : -1 , Casa : -1},                                 /* Este es el 0 */
	{ Id : 1 , Dispositivo : "Foco" , Valor : -1},          /* Este es el 1 */
	{ Id : 2 , Dispositivo : "Foco" , Valor : -1},          /* Este es el 2 */
	{ Id : 3 , Dispositivo : "Foco" , Valor : -1},          /* Este es el 3 */
	{ Id : 4 , Dispositivo : "Foco" , Valor : -1},          /* Este es el 4 */
	{ Id : 5 , Dispositivo : "Foco" , Valor : -1},          /* Este es el 5 */
	{ Id : 6 , Dispositivo : "Foco" , Valor : -1},          /* Este es el 6 */
	
	{ Id : 1 , Dispositivo : "Puerta" , Valor : -1},        /* Este es el 7 */
	{ Id : 2 , Dispositivo : "Puerta" , Valor : -1},        /* Este es el 8 */
	{ Id : 3 , Dispositivo : "Puerta" , Valor : -1},        /* Este es el 9 */
	{ Id : 4 , Dispositivo : "Puerta" , Valor : -1},        /* Este es el 10 */
	{ Id : 5 , Dispositivo : "Puerta" , Valor : -1},        /* Este es el 11 */
	{ Id : 6 , Dispositivo : "Puerta" , Valor : -1},        /* Este es el 12 */
	
	{ Id : 1 , Dispositivo : "Seguridad" , Valor : -1},     /* Este es el 13 */
	
	{ Id : 1 , Dispositivo : "Sensor" , Valor : -1},        /* Este es el 14 */
	{ Id : 2 , Dispositivo : "Sensor" , Valor : -1},        /* Este es el l5 */
	{ Id : 3 , Dispositivo : "Sensor" , Valor : -1},        /* Este es el 16 */
	{ Id : 4 , Dispositivo : "Sensor" , Valor : -1},        /* Este es el 17 */
	{ Id : 5 , Dispositivo : "Sensor" , Valor : -1},         /* Este es el 18 */
	{ Id : 6 , Dispositivo : "Sensor" , Valor : -1}         /* Este es el 19 */
];
function Boton(){
	Casa_Numero[0].Numero = document.getElementById("Numero_Casa").value;
	Casa_Numero[0].Click = true;
	Pedir_Datos();
}

function Pedir_Datos(){
	if( Casa_Numero[0].Numero != -1 ){
		const A = {
			"Casa" : Casa_Numero[0].Numero
		};
		const Paquete = JSON.stringify(A);

		var xhr = new XMLHttpRequest();

		xhr.open('POST','PHP/sesion.php',false);
		xhr.setRequestHeader("Content-type","application/json");
		xhr.onload = function (){
			if(xhr.status == 200){
				var json = JSON.parse(xhr.responseText);
				if(json.Casa != -1){
					/* Id y Casa */
					Dispositivo[0].Id = json[0].Id; Dispositivo[0].Casa = json[0].Casa;
					/* Focos */
					Dispositivo[1].Valor = json[0].Foco1;
					Dispositivo[2].Valor = json[0].Foco2;
					Dispositivo[3].Valor = json[0].Foco3;
					Dispositivo[4].Valor = json[0].Foco4;
					Dispositivo[5].Valor = json[0].Foco5;
					Dispositivo[6].Valor = json[0].Foco6;
					/* Puerta */
					Dispositivo[7].Valor = json[0].Puerta1;
					Dispositivo[8].Valor = json[0].Puerta2;
					Dispositivo[9].Valor = json[0].Puerta3;
					Dispositivo[10].Valor = json[0].Puerta4;
					Dispositivo[11].Valor = json[0].Puerta5;
					Dispositivo[12].Valor = json[0].Puerta6;
					/*Seguridad*/
					Dispositivo[13].Valor = json[0].Seguridad;
					/*Sensor*/
					Dispositivo[14].Valor = json[0].Sensor1;
					Dispositivo[15].Valor = json[0].Sensor2;
					Dispositivo[16].Valor = json[0].Sensor3;
					Dispositivo[17].Valor = json[0].Sensor4;
					Dispositivo[18].Valor = json[0].Sensor5;
					Dispositivo[19].Valor = json[0].Sensor6;
					if( Dispositivo[13].Valor == 1 && 
					(Dispositivo[14].Valor == 1 || Dispositivo[15].Valor == 1 || Dispositivo[16].Valor == 1 || Dispositivo[17].Valor == 1 || Dispositivo[18].Valor == 1 || Dispositivo[19].Valor == 1 ) ){
						document.getElementById("Alarma").style.display = null;
						
						for(let i in Dispositivo){
							if( Dispositivo[i].Dispositivo == "Sensor" ){
								if( Dispositivo[i].Valor == 1 ){
									document.getElementById("Sensor"+Dispositivo[i].Id).style.display = null;
								}else{
									document.getElementById("Sensor"+Dispositivo[i].Id).style.display = "none";
								}
							}
						}
					}else{
						document.getElementById("Alarma").style.display = "none";
					}
					
					if(Casa_Numero[0].Inicio){
						document.getElementById("inicio").style.display = "none";
						document.getElementById("herramientas").style.display = null;
						document.getElementById("focos").style.display = null;
						Casa_Numero[0].Inicio = false;
					}
					
				}else{
					if( Casa_Numero[0].Click ){
						document.getElementById("Error").innerText = "No Existe esta casa";
					}
				}
			}
		}
		xhr.send(Paquete);
	}
}

(function(){
	setInterval(
		function(){
			Pedir_Datos();
		},1000)
})()