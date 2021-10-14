function formSave(codigo){
  
  var window  = got(document,"window")[0];
	var form    = got(window,"form");

	var input    = got(form[0],"input");
	var textarea = got(form[0],"textarea");
	var select	 = got(form[0],"select");	
  
	var error    = "";
	
	var data = new FormData();
  
	for (var x = 0; x < input.length;x++){
		
		var n = input[x].getAttribute("name");
		var v = input[x].value;
		    v = (v!==null)?v:"";
		
		if(input[x].parentElement.getAttribute("type")=='data' && v!==""){
			
			var dataNew="";

		}
		
		if(input[x].type!='file' && input[x].type!='search' && n!='findernew' && n!='finder' && n!='ignore'){
			
			data.append(n,v);
			
		}
		
		if(input[x].getAttribute("required")=="1" && v===""){
			//error+=input[x].getAttribute("name")+"\n" ;
      let fieldcodigo = input[x].parentElement.getAttribute("fieldcodigo");
      		error+=getLocalStorageMessages('fieldempty'+fieldcodigo)+"\n" ;  
		}

	}

	for (var x = 0; x < textarea.length;x++){
				
		var n = textarea[x].getAttribute("name");
		var v = textarea[x].value;
		    v = (v!==null)?v:"";
		
		data.append(n,v);
		
		if(textarea[x].getAttribute("required")=="1" && v===""){
			error+=textarea[x].getAttribute("name")+"\n" ;
		}
		
	}
	
	for (var x = 0; x < select.length;x++){
			
		var n = select[x].getAttribute("name");
		var v = select[x].value;
		    v = (v!==null)?v:"";
		
		data.append(n,v);
		
		if(select[x].getAttribute("required")=="1" && v===""){
			error+=select[x].getAttribute("name")+"\n" ;
		}
		
	}	
  
  if(error!==""){
    
    alert(error);
    
  }else{
    
    formSend(data,codigo);
    
  }  
  
}