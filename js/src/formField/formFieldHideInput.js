function formMountHideInput(attribute){
	
 var div   = cE("div");	
	
	var icon  = cE("icon");
	    icon.setAttribute("class","icon-");
  
			div.appendChild(icon); 
	
			icon.onclick=function(){formHideInput(this);};
	
	
  var label       = cE("label");
  
  var vhide = (attribute.value)?"0":"1";

			div.setAttribute("hide",vhide);

			label.onclick=function(){formHideInput(this);};

			label.appendChild(cT(attribute.label));

			div.appendChild(label);

			attribute.type			= "text";

			var object = cE("input");

			for (var key in attribute){

				if(attribute[key]!=="0" && attribute[key]!==""){
					
					object.setAttribute(key,attribute[key]);
					
				}

			}

			object.setAttribute("autocomplete","off");
			object.setAttribute("type","text");
			// object.setAttribute("class","default");

			div.appendChild(object);
  
  return div;
  
}

function formHideInput(e){
	
	var hide = e.parentElement.getAttribute('hide');
	
	if(hide==1){
		e.parentElement.setAttribute('hide','0');
	}else if(hide==0){
		e.parentElement.setAttribute('hide','1');
	}
	
}