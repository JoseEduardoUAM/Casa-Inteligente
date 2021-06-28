<?php
	$conexion = mysqli_connect('mysql.webcindario.com','tpyep','eduardo112233',"tpyep" );
	
	$dato = file_get_contents("php://input",false);
	$arr = json_decode ($dato , true);
	
	$Id = $arr ['Id'];
	$Dispositivo = $arr ['Dispositivo'];
	$Valor = $arr ['Valor'];
	
	echo $Id . " " . $Valor;

	$sentencia = "UPDATE herramienta SET $Dispositivo = $Valor WHERE Id = $Id";
	mysqli_query($conexion,$sentencia);
?>