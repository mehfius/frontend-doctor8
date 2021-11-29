  function lazyload() {
        
    var config        = JSON.parse(localStorage.config);
    var user          = JSON.parse(localStorage.user);
    var modules       = document.body.getAttribute("modules");
    var rolled        = document.body.offsetHeight + document.body.scrollTop + document.documentElement.scrollTop;
    var height        = document.documentElement.scrollHeight;
    var tabela        = got(document,"tabela")[0];

    if ((rolled) > (height-10)) {
      
          window.onscroll=null;

        
          var limit = got(got(document,"tabela")[0],"item").length;


          document.body.setAttribute("loading","1");

          const loadLazyJson = async function(limit){
            
              const rawResponse = await fetch(config.urlmodules, {

                method: 'POST',
                headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                body: JSON.stringify({

                  modules: modules, 
                  session: user.session, 
                  page: limit
                  
                  })

              });

              const data = await rawResponse.json();

              Object.entries(data).forEach(([key, value]) => {


                let item = createObject('{"tag":"item","c":"'+value.id+'"}');

                loadItem(item,value);
                tabela.appendChild(item);
                
              });

              document.body.setAttribute("loading","0");
              window.onscroll=lazyload;
          }

          loadLazyJson(limit);

          

      /* 
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

        }); */
  
    }

}
/* 
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
 */
