  function lazyload() {

    var rolled = document.body.offsetHeight + document.body.scrollTop + document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight;
  
    if ((rolled) > (height-10)) {
      
        window.onscroll=null;

          var item = got(got(document,"tabela")[0],"item");

          var limit= item.length+",10";

          document.body.setAttribute("loading","1");
      
          loadLazyJson(limit,function(json){

            let tabela = got(document,"tabela")[0];

            let modules = document.body.getAttribute("modules");

            for(var x=0;x<json.length;x++){

                var item = cE('item');

                    item.setAttribute('c',json[x].codigo);

                    if(modules=="pacientes"){

                        loadItemView(item,json[x]);

                    }else{

                        loadItem(item,json[x]);

                    }

                    tabela.appendChild(item);

            }
                
            document.body.setAttribute("loading","0");
                
            //document.addEventListener('scroll',lazyload);
            window.onscroll=lazyload;

        });
  
    }

}

function loadMore(){
  
  var item = got(got(document,"tabela")[0],"item");
  var display="0";
  
  for(var x=0;x<item.length;x++){

    display=getComputedStyle(document.getElementsByTagName("item")[x]).display;
    
    if(display=="none"){
      
      for(var y=x;y<x+10;y++){
        
         if(item[y]!==undefined){
           item[y].style.display="block";
         }else{
           break;
         }
        
      }
      
      break;
     
    }
    
  }
 
}

function loadLazyJson(limit,cb){
  
  var url = localStorage.getItem("url")+'/admin/json/jsonView.php?&session='+localStorage.session+'&area='+gA()+'&limit='+limit;
		
	var xmlhttp;

	xmlhttp = new XMLHttpRequest();
 
	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			
 			var json = JSON.parse(xmlhttp.responseText);
		
			cb(json);

		}
    
	};
	
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
  
}