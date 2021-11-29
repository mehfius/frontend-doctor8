function category(header,array,item){
  
  if(array){
		
		var icon = cE("category");
    
    if(array.filename){
      
      let categoryfilename = array.filename;
      
      let categorystyleimage="url("+localStorage.getItem("img")+"/"+categoryfilename+")";
     
    }
    
		icon.appendChild(cT(array.label));

		header.appendChild(icon);

		item.setAttribute("category",array.id);

    
	}	
  
}