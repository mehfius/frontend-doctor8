function loadItemOptions(elements,array){
  
    let options = createObject('{"tag":"options"}');
  
  	if(array.me==1){
    
      let edit = createObject('{"tag":"button","action":"edit","class":"icon-pencil"}');

	    edit.onclick=(function(){ 

			  document.body.setAttribute("loading","1");
        formEdit(gA(),array.codigo)
      
      });
      
      options.append(edit);
      
    }
  
      let view = createObject('{"tag":"button","action":"view","class":"icon-enlarge"}');
  
 	        view.onclick=(function(){ 
        
            document.querySelector("item[c='"+array.codigo+"']").setAttribute("view","1");
      
          });
  
      let close = createObject('{"tag":"button","class":"icon-shrink","action":"close"}');

          close.onclick=(function(){ 

            document.querySelector("item[c='"+array.codigo+"']").setAttribute("view","0");

          });
    
    options.append(view);
    options.append(close);
    

    
    elements.appendChild(options);


}