
function mountFilterCustom(modules,placeholder){
  
        var div         = cE("selectsearch");
        var label       = cE("input");

            div.setAttribute('class',modules);

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
				
    	    select.setAttribute("mouse","0");

	var xmlhttp;
  
	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

          var json = JSON.parse(xmlhttp.responseText);

          for(var x=0;x<json.length;x++){

              var codigo  = json[x].codigo;
              var alabel  = json[x].label;
            
              var count   = createObject('{"tag":"count","innerhtml":"'+json[x].contador+'"}'); 
              var ecodigo   = createObject('{"tag":"codigo","innerhtml":"'+json[x].codigo+'"}');
   
              var bt 			= cE("opt");

              var optlabel		= cE("label");

                  optlabel.appendChild(cT(alabel));
            
              var optfigure 	= cE("figure");

              if(json[x].filename!==null){

                  optfigure.setAttribute("style","background-image:url("+localStorage.getItem("imgm")+json[x].filename+"?key="+json[x].key+");");

              }

              bt.appendChild(optfigure);
              bt.append(ecodigo)
              bt.appendChild(optlabel);
              bt.append(count);
              bt.setAttribute("value",codigo);

              bt.onclick=(function(){

                input.value=this.getAttribute("value");
                label.value=got(this,"label")[0].innerHTML;
                label.setAttribute("placeholder",got(this,"label")[0].innerHTML);

                var style=got(this,"figure")[0].getAttribute("style");

                labelfigure.setAttribute("style",style);

                var selectsearch=this.parentElement;

                var opt = got(selectsearch,"opt");

                for (var x=0;x<opt.length;x++){

                  opt[x].setAttribute("selected",false);
                  opt[x].style.display="none";
                  
                }

                this.setAttribute('selected',true);

                localStorage.filtropacientes=this.getAttribute("value");

                if(bt.value!==''){
                  
                  window.onscroll=null;
                  
                }else{

                 window.onscroll=lazyload;
                  
                }
                
                tabelaLoad(gA(),function(tabela){
                  
                  rE(got(document,'tabela'));
                  document.getElementsByTagName("view")[0].appendChild(tabela);
                  
                });

                
              });

            select.appendChild(bt);

          }

        }
    
  };

  var data = new FormData();
  
      data.append('modules', modules);
      data.append('session', localStorage.session);
  
  var url 	= localStorage.getItem("url")+'/admin/json/jsonSelect.php';
  
    xmlhttp.open("POST", url, true);
    xmlhttp.send(data);
    
	select.onmouseover = function(){
		
		this.setAttribute("mouse","1");
		
	}
	
	select.onmouseout = function(){
		
		this.setAttribute("mouse","0");
			
	}
	
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