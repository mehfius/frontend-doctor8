function formMountMultipleHidden(attribute){

  var label       = createObject('{"tag":"label","innerhtml":"'+attribute.label+'"}');
	var div         = createObject('{"tag":"div","class":"multiplehidden"}');
  var view        = createObject('{"tag":"multipleview"}');
 
      view.appendChild(multipleAdd(attribute));
  
      div.appendChild(label);
  
  var valor  = (attribute.value[0].value[0]==",")?attribute.value[0].value:","+attribute.value[0].value;
	
  var input  = createObject('{"tag":"input","name":"'+attribute.name+'","title":"","value":"'+valor+'","autocomplete":"off","required":"","type":"hidden","tipo":"select"}');
     
  var select = createObject('{"tag":"multiplehidden"}');
  
      select.appendChild(multipleHiddenClose());
  
      multipleHiddenFinder(select);
  
		  select.appendChild(input);
		
	var object = attribute.value;

		for (var item in object){
			
			let codigon = new Number(object[item].codigo);
     
			let codigo = object[item].codigo;
      
			let label = object[item].label;
      
			var bt = createObject('{"tag":"opt","areas":"'+object[item].areas+'","value":"'+codigo+'","innerhtml":"'+codigon.pad(6)+' - '+label+'"}');
      
      if(object[item].filename!=undefined){

        let filename = object[item].filename;    

        let style = "background-image:url("+localStorage.getItem("imgm")+filename+");";
        
            bt.setAttribute("style",style);
        
      }

			   // bt.appendChild(cT((codigo).pad(6)+" - "+label));
			   // bt.setAttribute("value",codigo);
			
			var selected = valor.indexOf(","+codigo+","); 
			
			if(selected>=0){
		
				bt.setAttribute('selected','1');

          var list = [];

          list.label=label;
          list.codigo=codigo;

          view.appendChild(coolbutton(list));        
        
			}else{
				
				bt.setAttribute('selected','0');
				
			}
			
			bt.onclick=(function(){
				
				var attr = this.getAttribute("selected");
				
				if(attr==1){
					
					this.setAttribute("selected","0");
					var valor = ","+this.getAttribute('value')+",";
					var text = input.value;
					var x = text.replace(valor,","); 
					input.value=x;
					
          var multipleview = got(this.parentElement.parentElement,"multipleview")[0];
          
          rE(goap(multipleview,"c",this.getAttribute('value'))[0]);
        
          
				}else{
					
					this.setAttribute("selected","1");
					var valor = this.getAttribute('value')+",";
					input.value=input.value+valor;
          
          var list = [];
              list.label=this.innerHTML;
              list.codigo=this.getAttribute('value');
          
          var multiple = this.parentElement.parentElement;
          var multipleview = got(multiple,"multipleview")[0];
              multipleview.appendChild(coolbutton(list));
					
				}

			});

			select.appendChild(bt);

		}
	
	  div.appendChild(select);
    div.appendChild(view);
  
  return div;
	
}

