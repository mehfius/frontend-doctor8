
function counter(div){
	
	function conta(object){
		
		var limit =	object.getAttribute("limit");
		var restante = limit-object.value.length;
		
		if(restante<0){
			object.parentNode.setAttribute("class","error");
		}else{
			object.parentNode.setAttribute("class","");
		}
		
		return  " ("+restante+" caracteres restantes)";
		
	}
	
	var object = pegaObjetoPorAtributoP(div,"limit");
	
	if(object.length){

		var label=got(div,"label")[0];
	
		var counter = cE("counter");
		var limit =	object[0].getAttribute("limit");
		
		label.appendChild(counter);
		
		counter.innerHTML=conta(object[0]);
		
		object[0].onkeyup=(function(){
			
			counter.innerHTML=conta(this);
			
		});
		
	}
	
}