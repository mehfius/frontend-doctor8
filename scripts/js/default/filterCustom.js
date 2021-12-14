
function mountFilterCustom(modules,placeholder){

  const user   = JSON.parse(localStorage.user);
  const config = JSON.parse(localStorage.config);

  var div         = cE("selectsearch");
  var label       = cE("input");

      //div.setAttribute('class',modules);

      label.setAttribute("id","filterlabel"+modules);
      label.setAttribute("name","finder");
  
		var labelfigure = cE("labelfigure");

		var icon		= cE("icon");
	
			icon.setAttribute("class","icon-cross");

		var input = cE("input");
  
            input.setAttribute("id","filtercodigo"+modules);
            input.setAttribute("type","hidden");
            input.setAttribute("filters","1");
            input.setAttribute("filternamemodules",modules);
  
		label.placeholder=placeholder;
		label.setAttribute("class","default");
		label.setAttribute("autocomplete","off");
	
		div.appendChild(labelfigure);
		div.appendChild(label);
		div.appendChild(icon);
  
		var select = cE("div");
				
    var url 	= config.url_filter;
    
      select.setAttribute("mouse","0");

      (async () => {

        const rawResponse = await fetch(config.url_filter, {
        method: 'POST',
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify({modules: modules, session: user.session})
        });

        const json = await rawResponse.json();

        mountFilterOpt(json,select);

      })();

        /* mountFilterOpt(json,select); */
    
	select.onmouseover = function(){this.setAttribute("mouse","1");}
	
	select.onmouseout = function(){this.setAttribute("mouse","0");}
	
	label.onblur = function() {
		
		if(select.getAttribute("mouse")==0){
			
			var item = got(select,"opt");

			for(var x=0;x<item.length;x++){

				item[x].style.display="none";

			}
			label.value="";
		}
		
	};
  
	icon.onclick=(function(){
    
        var selectsearch=this.parentElement;

            document.getElementById("filterlabel"+modules).setAttribute("placeholder",placeholder);
            document.getElementById("filterlabel"+modules).value="";
            document.getElementById("filtercodigo"+modules).value="";
            
            selectsearch.getElementsByTagName("labelfigure")[0].style="";
            
            tabelaLoad("",function(tabela){
            
            rE(got(document,'tabela'));
            document.getElementsByTagName("view")[0].appendChild(tabela);
            
            });
    
    });
  
	label.onfocus = function() {
		
		//if(attribute.value.length<50){
				var item = got(select,"opt");

				for(var x=0;x<item.length;x++){

								item[x].style.display="block";

				}
		//}
		
	};
	
  label.onkeyup = function() {

    var item = got(select,"opt");

    if(item.length && this.value.length>3){

      var string1 = removeAcento(this.value.toLowerCase());

            
      for(var x=0;x<item.length;x++){

        var ohtml=removeAcento(item[x].getElementsByTagName("label")[0].innerHTML.toLowerCase());

          if(ohtml.indexOf(string1) >= 0){			

            item[x].style.display="block";
            //item[x].parentElement.parentElement.setAttribute('open','1');
            
          }else{

            item[x].style.display="none";
            //item[x].parentElement.parentElement.setAttribute('open','0');
            
          }

      }

    }else{

      for(var x=0;x<item.length;x++){

        item[x].style.display="none";

      }

    }

  };
	
	div.appendChild(select);

	div.appendChild(input);

  return div;
  
}
