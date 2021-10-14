function loadItemJson(codigo,cb){
  
  var userinfo    = JSON.parse(localStorage.userinfo);
	var suitesinfo  = JSON.parse(localStorage.suitesinfo);
	var session     = localStorage.session;
  
  var data 	= new FormData();

 	    data.append('area', got(document,"window")[0].getAttribute("modules"));
 	    data.append('codigo', codigo);
 	    data.append('session', session);
  
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
			var json = JSON.parse(xmlhttp.responseText);
						
			cb(json[0]);
			
		}
		
	};
  
	var url = localStorage.getItem("url")+'/admin/json/jsonView.php';	
  
	xmlhttp.open("POST", url, true);
	xmlhttp.send(data);
	
}