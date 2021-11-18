function modulesLoadItemCategory(header,array,item){
  
  if(array.category!==undefined && array.category!==null){
		
		var icon = cE("category");
    
    if(array.categoryfilename!==undefined){
      
      let categoryfilename = array.categoryfilename;
      
      let categorystyleimage="url("+localStorage.getItem("img")+"/"+categoryfilename+")";
     
    }
    
		icon.appendChild(cT(array.categorylabel));

		header.appendChild(icon);

		item.setAttribute("category",array.category);

    item.style.backgroundColor=array.categorycolors+"20";
    
	}	
  
}