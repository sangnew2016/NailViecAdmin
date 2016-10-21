

<?php
	require __DIR__.'\startup.php';
	require $_CONFIG_PATH.'\common\functions.php';
	require $_CONFIG_PATH.'\config\connection.php';
	require $_CONFIG_PATH.'\common\data.php';
	require $_CONFIG_PATH.'\config\route.php';
	require $_CONFIG_PATH.'\controller\home.php';
	require $_CONFIG_PATH.'\controller\about.php';
	require $_CONFIG_PATH.'\controller\contact.php';


	require $_CONFIG_PATH.'\controller\admin.php';

	
	$route = new Route();
	$route->add('/', 'Home');
	$route->add('/about', 'About');
	$route->add('/contact', function(){
		$entityBody = file_get_contents('php://input');
	
		echo '<pre>', var_dump($entityBody);
		echo 'aaa';
	});
	$route->add('/admin', 'Admin');

	//declare route here
	$route->submit();

	
	
?>

