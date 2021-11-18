function formMountFields(modules,data){

 //function formMountFields(modules,json,codigo,action){

	//var languages  = JSON.parse(localStorage.languages);

	var user     = JSON.parse(localStorage.user);
	var config   = JSON.parse(localStorage.config);

	var window   = createObject('{"tag":"window","modules":"'+modules+'"}');
	var form     = createObject('{"tag":"form","autocomplete":"off"}');
	var header   = createObject('{"tag":"header"}');
	var label    = createObject('{"tag":"label"}');

	header.append(btBack(data.id));

	
	header.appendChild(label);

  if(document.getElementsByName('files')[0]!==undefined){

  }
	
	if(data.id===null){
    
		window.setAttribute("tutorial","1");
		label.appendChild(cT("Novo "+modules));
		
	}else{

    label.appendChild(cT("Editando "+modules));
    header.appendChild(btHeaderPrint());
    
		got(document,"body")[0].setAttribute("open","1");
				
	}  
  
  var menu = createObject('{"tag":"menu","style":"background-color:'+config.bgcolor+';"}');

	form.appendChild(menu);

  let jsonform = data[0].form.fields;

		Object.entries(jsonform).forEach(([key, value]) => {

/* 
		var type 		      = json[x].type;
		var grid 		      = json[x].grid;
		var gridmobile 		= json[x].gridmobile;
		var fieldcodigo 	= json[x].id;
    
		var attribute = [];
		
        attribute.codigo		      = codigo;
        attribute.label			      = json[x].label;
        attribute.name			      = json[x].name;
        attribute.title			      = json[x].title;
        attribute.required	      = json[x].required;
        attribute.pattern		      = json[x].pattern;
        attribute.value			      = (json[x].value!==undefined)?json[x].value:"";	
        attribute.list			      = (json[x].list!==undefined)?json[x].list:"";	
        attribute.limit			      = json[x].limit;
        attribute.grid			      = json[x].grid;
        attribute.gridmobile      = json[x].gridmobile;
        attribute.admin			      = json[x].admin;
        attribute.attributes			= json[x].attributes;
        attribute.placeholder			= json[x].placeholder;
        attribute.presetarray			= json[x].presetarray;  
        attribute.action			    = action;
 */
        let div = fields(jsonform);

        
    /*
		switch(type) {

            case "hide":            var div = formMountHide(attribute);div.setAttribute('type',type);           break;
            case "hideinput":       var div = formMountHideInput(attribute);div.setAttribute('type',type);      break; 
            case "textarea":        var div = formMountTextarea(attribute);div.setAttribute('type',type);       break;
            case "textareapreset":  var div = formMountTextareaPreset(attribute);div.setAttribute('type',type);       break;
            case "data":            var div = formMountData(attribute);div.setAttribute('type',type);           break;
            case "text":            var div = formMountText(attribute);div.setAttribute('type',type);           break;
            case "password":        var div = formMountPassword(attribute);div.setAttribute('type',type);       break;
            case "youtube":         var div = formMountYoutube(attribute);div.setAttribute('type',type);        break;  
            case "trueorfalse":     var div = formMountTrueFalse(attribute);div.setAttribute('type',type);      break;	
            case "texturl":         var div = formMountTexturl(attribute);div.setAttribute('type',type);        break;
            case "selectajax":      var div = formMountSelectAjax(attribute);                                   break;
            case "selectcolor":     var div = formMountSelectColor(attribute);                                  break;   
            case "search":          var div = formMountSelectCustom(attribute);                                 break;
            case "multiple":        var div = formMountMultiple(attribute);div.setAttribute('type',type);       break;
            case "multiplehidden":  var div = formMountMultipleHidden(attribute);div.setAttribute('type',type); break;
            case "share":           var div = formFieldShare(attribute);div.setAttribute('type',type);header.append(btOptionsBtShare());break;    
            case "tag":             var div = formMountTag(attribute);div.setAttribute('type',type);            break;
            case "taggroup":        var div = formMountTagGroup(attribute);div.setAttribute('type',type);       break; 
            case "keywords":        var div = formMountKeywords(attribute);div.setAttribute('type',type);       break;        
            case "fileupload":      var div = formMountFileupload(attribute);div.setAttribute('type',type);header.append(btHeaderAttach());break;
            case "select":
                        
                if(attribute.value=='undefined'){

                    if(attribute.value.length<30){
                        var div = formMountSelect(attribute);
                    }else{
                        var div = formMountSelectCustom(attribute);
                    }

                }else{
                    
                    var div = formMountSelect(attribute);
                    
                }

        	    break;

            default:
                    
                var div = formMountText(attribute);
                //console.log(type);

		}
    */
        div.setAttribute('id','div'+attribute.name);
        div.setAttribute('grid',grid);
        div.setAttribute('gridmobile',gridmobile);
        div.setAttribute('fieldcodigo',id);
        
        if(attribute.admin=="1"){
            div.setAttribute('admin',attribute.admin);
        }

        form.appendChild(div);	
	
	}
  
	window.appendChild(header);
	window.appendChild(form);
	
	document.body.appendChild(window);
  
}