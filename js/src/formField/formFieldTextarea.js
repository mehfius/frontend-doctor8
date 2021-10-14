
function formMountTextarea(attribute){
  
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
	  //label.append(textareaPresetSelect(object,attribute.presetarray));
  }
  
  div.appendChild(object);
  /*
	var editor = CKEDITOR.replace(object, {
toolbar: [
    { name: 'document', items: [  'Bold', 'Italic', 'NumberedList', 'BulletedList','-','Source','CreateDiv'] }
]});

// The "change" event is fired whenever a change is made in the editor.
editor.on( 'change', function( evt ) {
	object.innerHTML=this.getData();

});
	*/
  counter(div);	  
  
  return div;
  
}


function textareaPresetSelect(textarea,array){
  
  let label = createObject('{"tag":"label"}');
  
  let select = createObject('{"tag":"select"}');
  
      
    select.onchange=(function(){

      if(array[this.value].content!==undefined){
        textarea.innerHTML = array[this.value].content;
      }

    });
  
    select.append(createObject('{"tag":"option","value":"","innerhtml":"Predefinidos"}'));
  
  for (var x=0;x<array.length;x++){
    
    //let label   = array[x].label;
    let content = array[x].content;
    
    let option       = createObject('{"tag":"option","value":"'+x+'","innerhtml":"'+array[x].label+'"}');
    
    
    
    select.append(option);
    
  }
  
  label.append(select);
  //console.log(array[0]);
  
  return label;
  
}
