function fields(data){

  switch(data.type) {

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
}