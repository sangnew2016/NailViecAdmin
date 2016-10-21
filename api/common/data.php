<?php	

class Data {

	static function Connect() {	
		$config = Config::Connection();		
		$connection = mysqli_connect($config['host'], $config['username'], $config['password'], $config['database']);
		// Check connection		
		if (mysqli_connect_errno())
  		{
  			echo "Failed to connect to MySQL: " . mysqli_connect_error();
  		}
		return $connection;
	}

	static function Select($sql) {			
		$conn = Data::Connect();
		
		//echo 'sql: ', $sql; 

		mysqli_query($conn, "SET NAMES 'utf8'");
		$result = mysqli_query($conn, $sql);			
				
		$data = [];
		if ($result->num_rows > 0) {		    
		    while($row = $result->fetch_assoc()) {
		        $data[] = $row;
		    }
		}		

		mysqli_free_result($result);	

		mysqli_close($conn);

		return $data;
	}

	static function Query($sql) {
		$conn = Data::Connect();
		// Perform queries 
		$result = mysqli_query($conn, $sql);
		
		mysqli_close($conn);

		return $result;
	}
}	 
	
	 
	

?>