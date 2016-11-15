

<?php	
	//authenticate
	include_once '.\authenticate\includes\db_connect.php';
	include_once '.\authenticate\includes\functions.php';
	sec_session_start(); // Our custom secure way of starting a PHP session.

	if (login_check($mysqli) == true) 
	{
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
		//$route->add('/', 'Home');
		//$route->add('/about', 'About');
		//$route->add('/contact', function(){
		//	$entityBody = file_get_contents('php://input');
		
		//	echo '<pre>', var_dump($entityBody);
		//	echo 'aaa';
		//});
		$route->add('/admin', 'Admin');

		//declare route here
		$route->submit();
	} 
	else 
	{
		//header("Location: $loginPage");
		echo "@error:noauthentication$loginPage";
		exit();
	}	


	
?>

