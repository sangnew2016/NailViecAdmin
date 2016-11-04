<?php

class Functions {
	static function GetUri() {
		return isset($_GET['uri']) ? $_GET['uri'] : '/';
	}

	static function ComparePartOfUri($urlFromApi, $urlRegistered) {
		if (Functions::IsNullOrEmptyString($urlFromApi)) return false;

		$lengthUrlRegisterd = strlen($urlRegistered);
		$trimUrlFromApi = substr($urlFromApi, 0, $lengthUrlRegisterd);
		if (strtolower($urlRegistered) === strtolower($trimUrlFromApi)) return true;

		return false;
	}

	static function IsNullOrEmptyString($value){
    	return (!isset($value) || trim($value)==='');
	}

	static function IsMatchMethod($method) {
		$methods = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'];
		foreach($methods as $key => $value) {
			if($method === $value) return true;
		}
		return false;
	}

	static function GetParams() {
		$method = $_SERVER['REQUEST_METHOD'];
		$request = null;
		if($method == 'POST' || $method == 'PUT' || $method == 'PATCH') {
			$params = file_get_contents('php://input');
			$request = json_decode($params, true);
		} else {			
			parse_str($_SERVER['QUERY_STRING'], $request);			
		}
		return $request;
	}

	static function ProcessApi($partOfUri, $method, $objFuncName, $funcName) {		
		//get params		
		$request = Functions::GetParams();

		//match uri
		$url = Functions::GetUri();		
		$isUriMatch = Functions::ComparePartOfUri($url, $partOfUri);

		//match method
		$isMethodMatch = Functions::IsMatchMethod($method);

		if($isUriMatch && $isMethodMatch) {			
			call_user_func(array($objFuncName, $funcName), $request);
			return true;
		}
		return false;		
	}


	static function GetNumberParam($request, $paramName, $length = 10) {					
		$zeroResult = '0';
		if (!isset($request) || !isset($paramName)) return $zeroResult;
		if (!array_key_exists($paramName, $request)) return $zeroResult;

		$param = $request[$paramName];
		if (Functions::IsNullOrEmptyString($param)) return $zeroResult;
		if (strlen($param) > $length) return $zeroResult;
		if (!is_numeric($param)) return $zeroResult;

		$value = trim(strip_tags($param));
		return $value;
	}

	static function GetTextParam($request, $paramName, $length = 255) {					
		$empty = '';
		if (!isset($request) || !isset($paramName)) return $empty;
		if (!array_key_exists($paramName, $request)) return $empty;

		$param = $request[$paramName];
		if (Functions::IsNullOrEmptyString($param)) return $empty;
		if (strlen($param) > $length) return $empty;		

		$value = trim(strip_tags($param));
		return $value;
	}

	static function GetLongTextParam($request, $paramName) {
		$empty = '';
		if (!isset($request) || !isset($paramName)) return $empty;
		if (!array_key_exists($paramName, $request)) return $empty;

		$param = $request[$paramName];
		if (Functions::IsNullOrEmptyString($param)) return $empty;		

		$value = trim(strip_tags($param));
		return $value;
	}

	static function SaveGoogleMapIntoImage($latitude, $longtitude, $prefix) {		
		$fileName = '_' . Functions::udate("Y-m-d_H-i-s_u") . '_' . $prefix . '.png';
		$filePath = "output/googlemap/$fileName";	

		$link = "http://maps.googleapis.com/maps/api/staticmap?center=$latitude,$longtitude&zoom=13&size=960x640&markers=color:blue%7Clabel:S%7C$latitude,$longtitude&sensor=false"; 	
		
		if (@copy($link, $filePath)) {
			return $fileName;
		} else {
			return ""; 
		}		
	}

	static function udate($format = 'u', $utimestamp = null) {
        if (is_null($utimestamp))
            $utimestamp = microtime(true);

        $timestamp = floor($utimestamp);
        $milliseconds = round(($utimestamp - $timestamp) * 1000000);

        return date(preg_replace('`(?<!\\\\)u`', $milliseconds, $format), $timestamp);
    }
}

?>