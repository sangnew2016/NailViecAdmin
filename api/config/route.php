<?php
	
class Route {
	private $_uri = array();
	private $_method = array();

	public function add($uri, $method = null) {
		$this->_uri[] = ($uri == '/' ? '/' : trim($uri, '/'));
		$this->_method[] = $method;
	}

	public function submit() {
		$urlParam = Functions::GetUri();	

		//echo 'Param: '.$urlParam;
		//echo '<pre>', var_dump($this->_uri);
		
		foreach ($this->_uri as $key => $value) 
		{
			//if(preg_match("#^$value$#", $urlParam))
			if (Functions::ComparePartOfUri($urlParam, $value)) 
			{
				if(is_string($this->_method[$key])) 
				{
					$userMethod = $this->_method[$key];
					new $userMethod();	
				} 
				else 
				{
					call_user_func($this->_method[$key]);
				}
			}
		}
	}
}

?>