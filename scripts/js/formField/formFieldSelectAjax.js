function formMountSelectAjax(attribute){

  var div           = cE("div");
  var label         = cE("label");

  if(attribute.title!==''){

    label.appendChild(cT(attribute.label));
    formFieldTooltip(label,attribute.title);   
    
  }else{
    
    label.appendChild(cT(attribute.label));
    
  }

  div.appendChild(label);  

  var finder        = cE("input");

      finder.setAttribute("name","findernew");
      finder.setAttribute("title",attribute.label);
      finder.setAttribute("id","finder"+attribute.name);

  var labelfigure   = cE("labelfigure");
  
      if(attribute.value.length){

        labelfigure.style.backgroundColor=(attribute.value[0].colors!==undefined)?attribute.value[0].colors:"";
        labelfigure.style.backgroundImage=(attribute.value[0].filename!==undefined)?"url("+localStorage.getItem("imgm")+attribute.value[0].filename+"?key="+attribute.value[0].key+")":"";

      }
  
  var icon				  = cE("icon");

  if(attribute.value.length<50){
    
      icon.setAttribute("class","icon-arrowdown");
    
  }

  var iconconfig				= cE("icon");
      iconconfig.setAttribute("class","icon-cog");
      iconconfig.setAttribute("modules",attribute.name);

  var input = cE("input");
      input.setAttribute("name",attribute.name);
      input.setAttribute("id",attribute.name);
      input.setAttribute("type","hidden");
      input.setAttribute("codigo",attribute.codigo);
      input.setAttribute("required",attribute.required);
  
  if(attribute.value[0]!==undefined){
    input.value=attribute.value[0].value;
    
  }
  
  finder.placeholder=(attribute.value[0]!==undefined)?attribute.value[0].label:"Escolha "+attribute.label;
  finder.setAttribute("class","default");
  finder.setAttribute("autocomplete","off");


  div.appendChild(labelfigure);

  div.appendChild(finder);
  div.appendChild(icon);

  var select = cE("selectajax");
      select.setAttribute("mouse","0");
  
 
      select.onmouseover = function(){this.setAttribute("mouse","1");}
      select.onmouseout  = function(){this.setAttribute("mouse","0");}

	icon.onclick=(function(){label.focus();});
 
	finder.onkeyup = function() {

    
    if(finder.value.length>=3){
      
      loadOpt(this,attribute);
       
    }else{
      
      select.style.display="none";
      
    }

	};
  
  div.onblur = function() {};
	
	div.appendChild(select);
	div.appendChild(input);

  return div;
	
}