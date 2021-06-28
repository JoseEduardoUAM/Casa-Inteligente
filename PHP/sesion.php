<?php
$conexion = mysqli_connect('mysql.webcindario.com','tpyep','eduardo112233',"tpyep" );
$dato = file_get_contents("php://input",false);
$arr = json_decode ($dato , true);
$casa = $arr ['Casa'];

$sentencia = "SELECT * FROM `herramienta` WHERE Casa = $casa";
$result = mysqli_query($conexion,$sentencia);
$número_filas = mysqli_num_rows($result);

if( $número_filas > 0){
	$Datos = array();
	while( $mostrar = mysqli_fetch_array($result) ){
		$Datos[] = $mostrar;
	}
	echo json_encode($Datos);
}else{
	$Datos = [ "Casa" => -1 ];
	echo json_encode($Datos);
}
?>