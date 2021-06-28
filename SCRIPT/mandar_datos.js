
function Enviar( Id , Dispositivo , Valor ){
	const A = {
		"Id" : Id,
		"Dispositivo" : Dispositivo,
		"Valor" : Valor
	};
	const Paquete = JSON.stringify(A);
	var xhr = new XMLHttpRequest();
	xhr.open('POST','PHP/Actualizar_Datos.php',true);
	xhr.setRequestHeader("Content-type","application/json")
	xhr.send(Paquete);
}

for(let x in Dispositivo){
	if( Dispositivo[x].Dispositivo == "Foco" ){
		document.getElementById("Foco"+Dispositivo[x].Id+"0").onclick = function(){
			document.getElementById("Foco"+Dispositivo[x].Id+"0").style.display = "none";
			document.getElementById("Foco"+Dispositivo[x].Id+"1").style.display = null;
			Enviar( Dispositivo[0].Id , Dispositivo[x].Dispositivo+Dispositivo[x].Id , ( Dispositivo[x].Valor == 1 ? 0 : 1) );
		};
		document.getElementById("Foco"+Dispositivo[x].Id+"1").onclick = function(){
			document.getElementById("Foco"+Dispositivo[x].Id+"1").style.display = "none";
			document.getElementById("Foco"+Dispositivo[x].Id+"0").style.display = null;	
			Enviar( Dispositivo[0].Id , Dispositivo[x].Dispositivo+Dispositivo[x].Id , ( Dispositivo[x].Valor == 1 ? 0 : 1) );
		};
	}else if( Dispositivo[x].Dispositivo == "Puerta" ){
		document.getElementById("Puerta"+Dispositivo[x].Id+"0").onclick = function(){
			document.getElementById("Puerta"+Dispositivo[x].Id+"0").style.display = "none";
			document.getElementById("Puerta"+Dispositivo[x].Id+"1").style.display = null;
			Enviar( Dispositivo[0].Id , Dispositivo[x].Dispositivo+Dispositivo[x].Id , ( Dispositivo[x].Valor == 1 ? 0 : 1) );
		};
		document.getElementById("Puerta"+Dispositivo[x].Id+"1").onclick = function(){
			document.getElementById("Puerta"+Dispositivo[x].Id+"1").style.display = "none";
			document.getElementById("Puerta"+Dispositivo[x].Id+"0").style.display = null;	
			Enviar( Dispositivo[0].Id , Dispositivo[x].Dispositivo+Dispositivo[x].Id , ( Dispositivo[x].Valor == 1 ? 0 : 1) );
		};
	}else if( Dispositivo[x].Dispositivo == "Seguridad" ){
		document.getElementById("Seguridad0").onclick = function(){
			document.getElementById("Seguridad0").style.display = "none";
			document.getElementById("Seguridad1").style.display = null;
			Enviar( Dispositivo[0].Id , Dispositivo[x].Dispositivo , ( Dispositivo[x].Valor == 1 ? 0 : 1) );
		};
		document.getElementById("Seguridad1").onclick = function(){
			document.getElementById("Seguridad1").style.display = "none";
			document.getElementById("Seguridad0").style.display = null;	
			Enviar( Dispositivo[0].Id , Dispositivo[x].Dispositivo , ( Dispositivo[x].Valor == 1 ? 0 : 1) );
		};
	}
}

document.getElementById("Desactivar_Alarma").onclick = function(){
	document.getElementById("Alarma").style.display = "none";
	for(let i = 1 ; i <= 6 ; i++){
		Enviar( Dispositivo[0].Id , "Sensor"+i , 0);
		document.getElementById("Sensor"+i).style.display = "none";
	}
}



