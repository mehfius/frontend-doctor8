function getLocalStorage(key,object){
  
  var storage = JSON.parse(eval("localStorage."+key));
  
  return eval("storage."+object);
  
}