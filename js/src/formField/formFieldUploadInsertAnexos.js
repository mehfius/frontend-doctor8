
function insertAnexos(anexos,filename){
	

	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var authentic=xmlhttp.responseText;

			
			if(authentic==="1"){
				//success
				return true;
				
			}else{
				
				return false;
				
			}
		}
	};
  
	var url = localStorage.getItem("url")+'/admin/json/jsonAnexos.php';
  
  var data = new FormData();
 
      data.append('action','insert');
      data.append('anexos',anexos);
      data.append('filename',filename);  
      data.append('session',localStorage.session);  

  
	xmlhttp.open("POST", url, true);
	xmlhttp.send(data);
	
}