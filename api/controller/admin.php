<?php
	
/*===============================
	1. GET: return array
		VD: http://localhost/admin/api/admin?ab=12&aa=sangmimh
	2. POST: return array
		{
			"var_a": "aaa",
			"var_b": "bbb"
		}

		Must be "" not ''	
	3. Have piorities
		admin/management	(1)
		admin 				(2)

================================*/


class Admin {
	public function __construct() {				
		$result = true;			
		$result = $result && !Functions::ProcessApi('admin/getAreas', 'GET', $this, 'getAreas');
		$result = $result && !Functions::ProcessApi('admin/getShopsByAreas', 'GET', $this, 'getShopsByAreas');

		
		$result = $result && !Functions::ProcessApi('admin/getShopOwners', 'GET', $this, 'getShopOwners');
		$result = $result && !Functions::ProcessApi('admin/getShopOwner', 'GET', $this, 'getShopOwner');
		$result = $result && !Functions::ProcessApi('admin/postShopOwner', 'POST', $this, 'postShopOwner');
		$result = $result && !Functions::ProcessApi('admin/putShopOwner', 'PUT', $this, 'putShopOwner');

		$result = $result && !Functions::ProcessApi('admin/getShop', 'GET', $this, 'getShop');	
		$result = $result && !Functions::ProcessApi('admin/saveAdd', 'POST', $this, 'saveAddNews');
		$result = $result && !Functions::ProcessApi('admin/saveUpdate', 'PUT', $this, 'saveUpdateNews');




		$result = $result && !Functions::ProcessApi('admin/abc', 'GET', $this, 'method2');	
		$result = $result && !Functions::ProcessApi('admin', 'GET', $this, 'method3');	
	}
	

	function getShopOwner($request) {		
		$shopOwnerId = Functions::GetNumberParam($request, 'id');
		$sql = "select * from NailShopOwner where Id = $shopOwnerId";
		$result = Data::Select($sql);
		
		$dataJson = json_encode($result);		
		echo $dataJson;		
	}

	function getShopOwners($request) {		
		//get data (convert json) here...
		$sql = 'select * from NailShopOwner';
		$result = Data::Select($sql);
		
		$dataJson = json_encode($result);		
		echo $dataJson;		
	}

	function postShopOwner($request) {
		$message = $this->validateShopOwner($request);
		if (strlen($message) > 0) {
			echo $message;
			return;
		}
		
		$shopOwnerStatusId = Functions::GetNumberParam($request, 'ShopOwnerStatusId');
		$fullName = Functions::GetTextParam($request, 'FullName');
		$phone = Functions::GetTextParam($request, 'Phone');
		$emailAddress = Functions::GetTextParam($request, 'Email');
		$password = Functions::GetTextParam($request, 'Password');
		$confirmPassword = Functions::GetTextParam($request, 'ConfirmPassword');
		
		$sql = "insert into NailShopOwner(ShopOwnerStatusId, FullName, Phone, Email, Password) 
			values($shopOwnerStatusId, '$fullName', '$phone', '$emailAddress', '$password')";
		
		$result = Data::Query($sql);
		
		echo $result;
	}

	function putShopOwner($request) {
		$message = $this->validateShopOwner($request);
		if (strlen($message) > 0) {
			echo $message;
			return;
		}
		
		$id = Functions::GetNumberParam($request, 'Id');
		$shopOwnerStatusId = Functions::GetNumberParam($request, 'ShopOwnerStatusId');
		$fullName = Functions::GetTextParam($request, 'FullName');
		$phone = Functions::GetTextParam($request, 'Phone');
		$emailAddress = Functions::GetTextParam($request, 'Email');
		$password = Functions::GetTextParam($request, 'Password');
		$confirmPassword = Functions::GetTextParam($request, 'ConfirmPassword');
		
		$sql = "update NailShopOwner 
				set ShopOwnerStatusId = $shopOwnerStatusId, 
					FullName = '$fullName', 
					Phone = '$phone', 
					Email = '$emailAddress', 
					Password = '$password' 
				where Id = $id";
		
		$result = Data::Query($sql);
		
		echo $result;
	}

	function validateShopOwner($request) {
		return '';
	}

	function getAreas($request) {		
		//get data (convert json) here...
		$sql = 'select * from Areas where StateId = 44';
		$result = Data::Select($sql);

		$dataJson = json_encode($result);		
		echo $dataJson;
		
	}

	function getShopsByAreas($request) {
		//get data (convert json) here...
		$areaParam = trim(strip_tags($request['areas']));
		$sql = "select Id, ShopName, ShopAddress, ShopStatusId from NailShops where AreaId in ($areaParam) limit 0, 15";
		$result = Data::Select($sql);
				
		$dataJson = json_encode($result);		
		echo $dataJson;
	}

	function getShop($request) {
		//get data (convert json) here...
		$shopId = Functions::GetNumberParam($request, 'id');
		$sql = "select NS.Id, NS.ShopName, NS.ShopAddress, NS.ShopStatusId, NS.ShopOwnerId, NS.Longtitude, NS.Latitude, 
					PN.Id as 'PostedNewsId', PN.NewsStatusId, PN.Title, PN.Body, PN.PhoneContact, PN.DateUpdated, PN.Salary,
					NSO.FullName, NSO.Phone, NSO.Email 
				from NailShops NS inner join PostedNews PN on NS.Id = PN.NailShopId
					left join NailShopOwner NSO on NSO.Id = NS.ShopOwnerId
				where NS.Id = $shopId";		
		$result = Data::Select($sql);

		$dataJson = json_encode($result);		
		echo $dataJson;
	}

	function saveAddNews($request) {
		//echo '<pre>', var_dump($request);	
		$message = validateNews($request);
		if (strlen($message) > 0) {
			echo $message;
			return;
		}

		$newsStatus_Inprocess = '3';
		$newsStatusId = Functions::GetNumberParam($request, $newsStatus_Inprocess);
		$title = Functions::GetTextParam($request, 'title');
		$body = Functions::GetTextParam($request, 'body');
		$phoneContact = Functions::GetTextParam($request, 'phoneContact');
		$dateUpdated = date("Y-m-d H:i:s");
		$salary = Functions::GetTextParam($request, 'salary');

		$sql = "insert into PostedNews(NewsStatusId, Title, Body, PhoneContact, DateUpdated, Salary) 
			values($newsStatusId, '$title', '$body', '$phoneContact', '$dateUpdated', '$salary')";
		$result = Data::Query($sql);
		
		echo $result;
	}

	function saveUpdateNews($request) {
		//echo '<pre>', var_dump($request);	
		$message = validateNews($request);
		if (strlen($message) > 0) {
			echo $message;
			return;
		}
		
		$id = Functions::GetNumberParam($request, 'id');
		$newsStatusId = Functions::GetNumberParam($request, 'newsStatusId');
		$title = Functions::GetTextParam($request, 'title');
		$body = Functions::GetTextParam($request, 'body');
		$phoneContact = Functions::GetTextParam($request, 'phoneContact');
		$dateUpdated = date("Y-m-d H:i:s");
		$salary = Functions::GetTextParam($request, 'salary');

		$sql = "update PostedNews 
			set NewsStatusId = $newsStatusId, Title = $title, Body = $body, PhoneContact = $phoneContact, DateUpdated = $dateUpdated, Salary = $salary 
			where Id = $id";
		$result = Data::Query($sql);
		
		echo $result;
	}

	function method1($x) {
		echo '--Method 1---', '<pre>', var_dump($x);
	}

	function method2($x) {
		echo '--Method 2---', '<pre>', var_dump($x);
	}

	function method3($x) {
		echo '--Method 3---', '<pre>', var_dump($x);
	}
}	

?>