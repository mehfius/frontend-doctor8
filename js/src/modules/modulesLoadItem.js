function loadItem(item,array){
  
  var header = cE("header");
  
  var footer = cE("footer");
  
        item.setAttribute('me',array.me);
        item.setAttribute("a",array.activated);
        item.setAttribute("view","0");
  
  if(array.me==1){
    
  }else{
    
      var iconshare = document.createElement("icon");
          iconshare.setAttribute("class","icon-share2");
    
      header.appendChild(iconshare);
    
  }
  
  
  if(array.category!==undefined && array.category!==null){item.appendChild(header); } 
  
  //loadInfo(header,array);
	
  loadPacientes(header,array);
  
  modulesLoadItemCategory(header,array,item);

  if(array.label!==""){
	  modulesLoadItemContent(item,array);
  }
  
  loadItemOptions(item,array);
  loadItemDetail(item,array);
  loadMedicos(item,array);
  //loadPacientesFull(item,array);
  loadItemUpdateTime(item,array);
  loadShare(footer,array);
  
  if(footer.innerHTML!=""){item.appendChild(footer);}

}