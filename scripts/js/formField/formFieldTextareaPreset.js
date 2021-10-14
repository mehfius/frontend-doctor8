
function formMountTextareaPreset(attribute){

  var label       = cE("label");
  var div         = cE("div");
  
  
  if(attribute.title!==''){
    
    label.appendChild(cT(attribute.label));
    formFieldTooltip(label,attribute.title); 

  }else{

    label.appendChild(cT(attribute.label));

  }

 div.appendChild(label);
  
  var object = cE("textarea");
	
	for (var key in attribute){
		
		if(attribute[key]!=="0" && attribute[key]!==""){
			
			if(key=='value'){
				object.appendChild(cT(attribute[key]));
	
			}else{
				object.setAttribute(key,attribute[key]);
			}
			
		}
		
	}
	object.setAttribute('id','editor');
	object.setAttribute("class","default");
  object.setAttribute("placeholder",attribute.label);
	object.setAttribute("required",attribute.required);
  
  if(attribute.presetarray!==undefined){
	  label.append(textareaPresetSelect(object,attribute.presetarray));
  }
  
  div.appendChild(object);
  
  
  counter(div);	  
  
  return div;
  
}
