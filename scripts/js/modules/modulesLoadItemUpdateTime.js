function loadItemUpdateTime(elements,array){

  let elementocreated = document.createElement("created");
  let elementoupdated = document.createElement("updated");
  let elementodata    = document.createElement("data");
  
  let data        = new Date(array.update);
  let createddata = new Date(array.data);
  
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  let update = data.toLocaleDateString('pt-BR', options);
  
  let created = createddata.toLocaleDateString('pt-BR', options);
  
  let updatetext = "Editado "+update;
     
  
  let createdtext = "Criado "+created;

      elementoupdated.append(document.createTextNode(updatetext));
      elementocreated.append(document.createTextNode(createdtext));
  
      elementocreated.setAttribute("style","background-color:"+array.categorycolors+"20;");
      elementoupdated.setAttribute("style","background-color:"+array.categorycolors+"20;");
  
      elementodata.appendChild(elementocreated);
  
  if(array.data!==array.update){
      elementodata.appendChild(elementoupdated); 
  }
  
  elements.appendChild(elementodata);
}