
function finder(object){
	
	var finder = cE("input");
	var label = got(object,"label");
	
	finder.setAttribute("type","text");
	finder.setAttribute("placeholder",label[0].innerHTML+" - Digite para procurar");
	finder.setAttribute("name","finder");
	finder.setAttribute("class","default");
  
	finder.onblur = function() {
		
	};  
  
	finder.onkeyup = function() {
    
    if(this.value.length>=3){
      
		var item = got(object,"opt");

		if(item.length){

			var string1 = removeAcento(this.value.toLowerCase());

			for(var x=0;x<item.length;x++){

				var ohtml=removeAcento(item[x].innerHTML.toLowerCase());

				if(item[x].getAttribute("selected")=="0"){

					if(ohtml.indexOf(string1) >= 0){			

						//item[x].style.display="block";
            item[x].setAttribute('found','1');
            
            
					}else{

						//item[x].style.display="none";
            item[x].setAttribute('found','0');
					}

				}


			}
      
    }

    }else{
      
      for(var x=0;x<item.length;x++){

        item[x].setAttribute('found','0');

      }
    }
      
	};
	
	object.appendChild(finder);
	
}