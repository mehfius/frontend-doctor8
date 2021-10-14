function formMountV2(modules,action,codigo,cb){
  
  var suitesinfo  = JSON.parse(localStorage.suitesinfo);
  var userinfo    = JSON.parse(localStorage.userinfo);
	var session     = localStorage.session;
  
  var data 	= new FormData();

 	    data.append('area', modules);
 	    data.append('acao', action);
 	    data.append('codigo', codigo);
 	    data.append('session', session);
 	    data.append('codigosuites', suitesinfo.codigo);
  
	var url 	= localStorage.getItem("url")+'/admin/json/index.php';

	var xmlhttp;


	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
 			var json = JSON.parse(xmlhttp.responseText);
			
			if(action=="edit"){

				formMountFields(modules,json,codigo,action);

				cb();
				
			}else if(action == "insert"){
	
				formMountFields(modules,json,codigo,action);
				
				cb();
        
			}else if(action == "view"){
	
				formMountFields(modules,json,codigo,action);
				
				cb();
      
			}
			
		}
		
	};
	
	xmlhttp.open("POST", url, true);
	xmlhttp.send(data);
	
}