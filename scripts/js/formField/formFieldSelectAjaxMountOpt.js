

function mountOpt(json,attribute){
  
  var opt    = document.createElement("opt");
  var label  = document.createElement("label");
  var figure = document.createElement("figure");
  
  label.appendChild(document.createTextNode(json.label));
  opt.setAttribute("codigo",json.codigo);
  
  
  if(json.colors!==undefined){

    figure.setAttribute("style","background-color:"+json.colors+";");

  }

  if(json.filename!==undefined){

    figure.setAttribute("style","background-image:url("+localStorage.getItem("imgm")+json.filename+"?key="+json.key+");");

  }
  
  opt.onclick=(function(){
    
    var finder = document.getElementById("finder"+attribute.name);
    var input  = document.getElementById(attribute.name);
    var select = document.getElementById("div"+attribute.name);

    var selectajax = select.getElementsByTagName("selectajax")[0];

    var labelfigure = select.getElementsByTagName("labelfigure")[0];
    
    if(json.colors!==undefined){
      
      selectajax.style.display="none";
      labelfigure.setAttribute("style","background-color:"+json.colors+";");
      
    }
    
    if(json.filename!==undefined){
      
       selectajax.style.display="none";
       labelfigure.setAttribute("style","background-image:url("+localStorage.getItem("imgm")+json.filename+"?key="+json.key+");");
      
    }
  
    let window = document.querySelector("window");
        window.setAttribute(attribute.name,json.codigo)
    
    input.value        = json.codigo;
    finder.value       = label.innerHTML;
    finder.placeholder = label.innerHTML;
    
  });
              

    
  opt.appendChild(figure);
  opt.appendChild(label);
  
  return opt;
  
}

function loadOpt(element,attribute){
  
	var url 	= localStorage.getItem("url")+'/admin/json/jsonGetTableView.php?p='+attribute.name+'|codigo|label&l=label|'+element.value;

	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
 			var json = JSON.parse(xmlhttp.responseText);

      //var select= document.getElementById("div"+attribute.name).getElementsByTagName("selectajax")[0];
      
      var select= element.parentElement.getElementsByTagName("selectajax")[0];
      
        race(select);

        for(var x=0;x<json.length;x++){

          select.appendChild(mountOpt(json[x],attribute));

        }
      
        if(json.length>=1){
          select.style.display='block';
        }else{
          select.style.display='none';
        }
      
		}
		
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();  
  
}