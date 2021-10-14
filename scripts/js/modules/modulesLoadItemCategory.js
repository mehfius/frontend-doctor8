function modulesLoadItemCategory(header,array,item){
  
  if(array.category!==undefined && array.category!==null){
		
		var icon = cE("category");
    
    if(array.categoryfilename!==undefined){
      
      let categoryfilename = array.categoryfilename;
      
      let categorystyleimage="url("+localStorage.getItem("img")+"/"+categoryfilename+")";
     
    }
    
		icon.appendChild(cT(array.categorylabel));
		//icon.setAttribute("style","color:"+array.categorycolors+";");
		header.appendChild(icon);

		item.setAttribute("category",array.category);
		//item.setAttribute("style","background-color:"+array.categorycolors+"20;border:1px solid "+array.categorycolors+"40;");
		header.setAttribute("style","background-color:"+array.categorycolors+"20;");
    //item.style.border="1px solid "+array.categorycolors+"40";
    item.style.backgroundColor=array.categorycolors+"20";
    
	}	
  
}