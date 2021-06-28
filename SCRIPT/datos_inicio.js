function s_f(){
	if(Casa_Numero != -1){
		for(let x in Dispositivo){
			if(Dispositivo[x].Dispositivo == "Foco"){
				if(Dispositivo[x].Valor == 1){
					document.getElementById("Foco"+ Dispositivo[x].Id +"1").style.display = null;
					document.getElementById("Foco"+ Dispositivo[x].Id +"0").style.display = "none";					
				}else{
					document.getElementById("Foco"+ Dispositivo[x].Id +"1").style.display = "none";
					document.getElementById("Foco"+ Dispositivo[x].Id +"0").style.display = null;
				}
			}else if(Dispositivo[x].Dispositivo == "Puerta"){
				if(Dispositivo[x].Valor == 1){
					document.getElementById("Puerta"+ Dispositivo[x].Id +"1").style.display = null;
					document.getElementById("Puerta"+ Dispositivo[x].Id +"0").style.display = "none";					
				}else{
					document.getElementById("Puerta"+ Dispositivo[x].Id +"1").style.display = "none";
					document.getElementById("Puerta"+ Dispositivo[x].Id +"0").style.display = null;
				}
			}else if(Dispositivo[x].Dispositivo == "Seguridad"){
				if(Dispositivo[x].Valor == 1){
					document.getElementById("Seguridad1").style.display = null;
					document.getElementById("Seguridad0").style.display = "none";					
				}else{
					document.getElementById("Seguridad1").style.display = "none";
					document.getElementById("Seguridad0").style.display = null;
				}				
			}
		}
	}
}

(function(){
	setInterval(
		function(){
			s_f();
		},1000)
})()