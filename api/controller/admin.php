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
		//$result = $result && !Functions::ProcessApi('admin/getAreas', 'GET', $this, 'getAreas');
		//$result = $result && !Functions::ProcessApi('admin/getShopsByAreas', 'GET', $this, 'getShopsByAreas');
		
		$result = $result && !Functions::ProcessApi('admin/getShopStatus', 'GET', $this, 'getShopStatus');
		$result = $result && !Functions::ProcessApi('admin/getShopOwnerStatus', 'GET', $this, 'getShopOwnerStatus');
		$result = $result && !Functions::ProcessApi('admin/getAreasBySelectDom', 'GET', $this, 'getAreasBySelectDom');
		$result = $result && !Functions::ProcessApi('admin/getShopOwnerBySelectDom', 'GET', $this, 'getShopOwnerBySelectDom');
		$result = $result && !Functions::ProcessApi('admin/getJobStatus', 'GET', $this, 'getJobStatus');
		$result = $result && !Functions::ProcessApi('admin/getShopBySelectDom', 'GET', $this, 'getShopBySelectDom');

		
		$result = $result && !Functions::ProcessApi('admin/getShopOwners', 'GET', $this, 'getShopOwners');
		$result = $result && !Functions::ProcessApi('admin/getShopOwner', 'GET', $this, 'getShopOwner');
		$result = $result && !Functions::ProcessApi('admin/postShopOwner', 'POST', $this, 'postShopOwner');
		$result = $result && !Functions::ProcessApi('admin/putShopOwner', 'PUT', $this, 'putShopOwner');

		$result = $result && !Functions::ProcessApi('admin/getShopList', 'GET', $this, 'getShopList');
		$result = $result && !Functions::ProcessApi('admin/getShopItem', 'GET', $this, 'getShopItem');
		$result = $result && !Functions::ProcessApi('admin/postShopItem', 'POST', $this, 'postShopItem');
		$result = $result && !Functions::ProcessApi('admin/putShopItem', 'PUT', $this, 'putShopItem');

		$result = $result && !Functions::ProcessApi('admin/getJobList', 'GET', $this, 'getJobList');
		$result = $result && !Functions::ProcessApi('admin/getJobItem', 'GET', $this, 'getJobItem');
		$result = $result && !Functions::ProcessApi('admin/postJobItem', 'POST', $this, 'postJobItem');
		$result = $result && !Functions::ProcessApi('admin/putJobItem', 'PUT', $this, 'putJobItem');


		$result = $result && !Functions::ProcessApi('admin/getShop', 'GET', $this, 'getShop');	
		$result = $result && !Functions::ProcessApi('admin/saveAdd', 'POST', $this, 'saveAddNews');
		$result = $result && !Functions::ProcessApi('admin/saveUpdate', 'PUT', $this, 'saveUpdateNews');




		$result = $result && !Functions::ProcessApi('admin/abc', 'GET', $this, 'method2');	
		$result = $result && !Functions::ProcessApi('admin', 'GET', $this, 'method3');	
	}
	

	//=============================================
	// ShopOwner
	//=============================================	
	function getShopOwners($request) {		
		//get data (convert json) here...
		$sql = 'select NS.Id, NS.ShopOwnerStatusId, NS.FullName, NS.Phone, NS.Email, NS.DateUpdated, NSS.Name as ShopOwnerStatusName 
				from NailShopOwner NS inner join ShopOwnerStatus NSS on NS.ShopOwnerStatusId = NSS.Id 
				order by NS.DateUpdated desc, NS.Email, NS.FullName';
		$result = Data::Select($sql);
		
		$dataJson = json_encode($result);		
		echo $dataJson;		
	}

	function getShopOwner($request) {		
		$shopOwnerId = Functions::GetNumberParam($request, 'id');
		$sql = "select Id, ShopOwnerStatusId, FullName, Phone, Email from NailShopOwner where Id = $shopOwnerId";
		$result = Data::Select($sql);
		
		$dataJson = json_encode($result);		
		echo $dataJson;		
	}

	function getShopOwnerStatus() {				
		$sql = "select Id, Name from ShopOwnerStatus";
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
		$dateUpdated = date("Y-m-d H:i:s");

		$sql = "insert into NailShopOwner(ShopOwnerStatusId, FullName, Phone, Email, Password, DateUpdated) 
			values($shopOwnerStatusId, N'$fullName', '$phone', '$emailAddress', '$password', '$dateUpdated')";
		
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
		$dateUpdated = date("Y-m-d H:i:s");

		$sql = "update NailShopOwner 
				set ShopOwnerStatusId = $shopOwnerStatusId, 
					FullName = N'$fullName', 
					Phone = '$phone', 
					Email = '$emailAddress', 
					Password = '$password',
					DateUpdated = '$dateUpdated' 
				where Id = $id";
		
		$result = Data::Query($sql);
		
		echo $result;
	}

	//=============================================
	// Shop
	//=============================================
	function getShopList($request) {		
		//get data (convert json) here...
		$sql = 'select NS.Id, NS.ShopStatusId, SS.Name as ShopStatusName, NS.ShopName, NS.ShopAddress, 
					NSO.FullName as ShopOwnerName, NSO.Phone as ShopOwnerPhone, NSO.Email as ShopOwnerEmail
				from NailShops NS inner join NailShopOwner NSO on NS.ShopOwnerId = NSO.Id
					inner join ShopStatus SS on SS.Id = NS.ShopStatusId
				order by NS.DateUpdated desc, NS.ShopName, NSO.FullName, NSO.Email';

		$result = Data::Select($sql);
		
		$dataJson = json_encode($result);		
		echo $dataJson;		
	}

	function getShopItem($request) {		
		$shopId = Functions::GetNumberParam($request, 'id');
		$sql = "select Id, ShopStatusId, ShopName, ShopAddress, AreaId, Longtitude, Latitude, ShopOwnerId
				from NailShops 
				where Id = $shopId";

		$result = Data::Select($sql);
		
		$dataJson = json_encode($result);		
		echo $dataJson;		
	}

	function getShopStatus() {				
		$sql = "select Id, Name from ShopStatus";
		$result = Data::Select($sql);
		
		$dataJson = json_encode($result);		
		echo $dataJson;		
	}

	function getAreasBySelectDom() {				
		$sql = "select Id, Name from Areas";
		$result = Data::Select($sql);
		
		$dataJson = json_encode($result);		
		echo $dataJson;		
	}

	function getShopOwnerBySelectDom() {
		$sql = "select Id, CONCAT(FullName, ' (', Email, ')') as Name from nailshopowner";
		$result = Data::Select($sql);
		
		$dataJson = json_encode($result);		
		echo $dataJson;		
	}

	function postShopItem($request) {
		//$message = $this->validateShop($request);
		//if (strlen($message) > 0) {
		//	echo $message;
		//	return;
		//}
		
		$shopStatusId = Functions::GetNumberParam($request, 'ShopStatusId');
		$shopOwnerId = Functions::GetNumberParam($request, 'ShopOwnerId');
		$areaId = Functions::GetNumberParam($request, 'AreaId');

		$shopName = Functions::GetTextParam($request, 'ShopName');
		$shopAddress = Functions::GetTextParam($request, 'ShopAddress');		
		$longtitude = Functions::GetTextParam($request, 'Longtitude');
		$latitude = Functions::GetTextParam($request, 'Latitude');	
		$dateUpdated = date("Y-m-d H:i:s");

		//save googlemap as Image		
		$fileName = Functions::SaveGoogleMapIntoImage($latitude, $longtitude, 'shop');
		if (strlen($fileName) <= 0) {
			echo '@error:Cannot save file googlemap into server. Please try it again!';
			return;
		}

		$sql = "insert into NailShops(AreaId, ShopOwnerId, ShopStatusId, ShopName, ShopAddress, FileName, DateUpdated) 
			values($areaId, $shopOwnerId, $shopStatusId, N'$shopName', N'$shopAddress', '$fileName', '$dateUpdated')";
		
		$result = Data::Query($sql);
		
		echo $result;
	}

	function putShopItem($request) {
		//$message = $this->validateShop($request);
		//if (strlen($message) > 0) {
		//	echo $message;
		//	return;
		//}
		
		$id = Functions::GetNumberParam($request, 'Id');
		$shopStatusId = Functions::GetNumberParam($request, 'ShopStatusId');
		$shopOwnerId = Functions::GetNumberParam($request, 'ShopOwnerId');
		$areaId = Functions::GetNumberParam($request, 'AreaId');

		$shopName = Functions::GetTextParam($request, 'ShopName');
		$shopAddress = Functions::GetTextParam($request, 'ShopAddress');		
		$longtitude = Functions::GetTextParam($request, 'Longtitude');
		$latitude = Functions::GetTextParam($request, 'Latitude');	
		$dateUpdated = date("Y-m-d H:i:s");

		//save googlemap as Image		
		$fileName = Functions::SaveGoogleMapIntoImage($latitude, $longtitude, 'shop');
		if (strlen($fileName) > 0) {
			echo '@error:Cannot save file googlemap into server. Please try it again!';
			return;
		}
		
		$sql = "update NailShops 
				set ShopStatusId = $shopStatusId, 
					ShopOwnerId = $shopOwnerId, 
					AreaId = $areaId, 
					ShopName = N'$shopName', 
					ShopAddress = N'$shopAddress', 
					Longtitude = '$longtitude',
					Latitude = '$latitude',
					FileName = '$fileName',
					DateUpdated = '$dateUpdated' 
				where Id = $id";
		
		$result = Data::Query($sql);

		echo $result;
	}

	//=============================================
	// Job
	//=============================================
	function getJobList($request) {		
		//get data (convert json) here...
		$sql = 'select J.Id, J.JobStatusId, JS.Name as JobStatusName, NS.ShopName, 
					J.Title, J.Body, J.PhoneContact, J.Salary 					
				from Jobs J inner join NailShops NS on J.NailShopId = NS.Id
					inner join JobStatus JS on JS.Id = J.JobStatusId
				order by J.DateUpdated desc, J.Title';

		$result = Data::Select($sql);
		
		$dataJson = json_encode($result);		
		echo $dataJson;		
	}

	function getJobItem($request) {		
		$jobId = Functions::GetNumberParam($request, 'id');
		$sql = "select Id, JobStatusId, NailShopId, Title, Body, PhoneContact, Salary 
				from Jobs 
				where Id = $jobId";

		$result = Data::Select($sql);
		
		$dataJson = json_encode($result);		
		echo $dataJson;		
	}

	function getJobStatus() {				
		$sql = "select Id, Name from JobStatus";
		$result = Data::Select($sql);
		
		$dataJson = json_encode($result);		
		echo $dataJson;		
	}
	
	function getShopBySelectDom() {
		$sql = "select Id, CONCAT(ShopName, ' (', ShopAddress, ')') as Name from nailshops";
		$result = Data::Select($sql);
		
		$dataJson = json_encode($result);		
		echo $dataJson;		
	}

	function postJobItem($request) {
		//$message = $this->validateShop($request);
		//if (strlen($message) > 0) {
		//	echo $message;
		//	return;
		//}
		
		$jobStatusId = Functions::GetNumberParam($request, 'JobStatusId');
		$shopId = Functions::GetNumberParam($request, 'NailShopId');		

		$title = Functions::GetTextParam($request, 'Title');
		$body = Functions::GetTextParam($request, 'Body');		
		$phoneContact = Functions::GetTextParam($request, 'PhoneContact');
		$salary = Functions::GetTextParam($request, 'Salary');	
		$dateUpdated = date("Y-m-d H:i:s");

		$sql = "insert into Jobs(JobStatusId, NailShopId, Title, Body, PhoneContact, Salary, DateUpdated) 
			values($jobStatusId, $shopId, N'$title', N'$body', N'$phoneContact', N'$salary', '$dateUpdated')";

		$result = Data::Query($sql);
		
		echo $result;
	}

	function putJobItem($request) {
		//$message = $this->validateShop($request);
		//if (strlen($message) > 0) {
		//	echo $message;
		//	return;
		//}
		
		$id = Functions::GetNumberParam($request, 'Id');
		$jobStatusId = Functions::GetNumberParam($request, 'JobStatusId');
		$shopId = Functions::GetNumberParam($request, 'NailShopId');		

		$title = Functions::GetTextParam($request, 'Title');
		$body = Functions::GetTextParam($request, 'Body');		
		$phoneContact = Functions::GetTextParam($request, 'PhoneContact');
		$salary = Functions::GetTextParam($request, 'Salary');	
		$dateUpdated = date("Y-m-d H:i:s");

		$sql = "update Jobs 
				set JobStatusId = $jobStatusId, 
					NailShopId = $shopId, 
					Title = N'$title', 
					Body = N'$body', 
					PhoneContact = N'$phoneContact',
					Salary = N'$salary',
					DateUpdated = '$dateUpdated' 
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