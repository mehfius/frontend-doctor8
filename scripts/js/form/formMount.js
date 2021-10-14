function formMount(modules,codigo,cb){
  
  var suitesinfo  = JSON.parse(localStorage.suitesinfo);
  var userinfo    = JSON.parse(localStorage.userinfo);
	var session     = localStorage.session;
  
  var data 	= new FormData();

 	    data.append('area', modules);
 	    data.append('acao', 'editar');
 	    data.append('codigo', codigo);
 	    data.append('session', session);
 	    data.append('codigosuites', suitesinfo.codigo);
  
   	  //data.append('area', content);
  
  
	var url 	= localStorage.getItem("url")+'/admin/json/index.php';

	var xmlhttp;
	var action = (codigo!==null)?"edit":"insert";

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
 			var json = JSON.parse(xmlhttp.responseText);
			
			if(action=="edit"){

				formMountFields(modules,json,codigo);

				cb();
				
			}else if(action == "insert"){
	
				formMountFields(modules,json,codigo);
				
				cb();
				
			}
			
		}
		
	};
	
	xmlhttp.open("POST", url, true);
	xmlhttp.send(data);
	
}