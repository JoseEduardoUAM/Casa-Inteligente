<?php
	$conexion = mysqli_connect('mysql.webcindario.com','tpyep','eduardo112233',"tpyep" );
	$sql = "SELECT * from herramienta";
	$result = mysqli_query($conexion,$sql);
	
	$Datos = array();
	while( $mostrar = mysqli_fetch_array($result) ){
		$Datos[] = $mostrar;
	}
	echo json_encode($Datos);

?>