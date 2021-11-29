
function selectOpt(modules){
  
  const config = JSON.parse(localstorage.config);

    const send = async function() {
      
      const rawResponse = await fetch(config.select, {

        method: 'POST',
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify({modules:modules})

      });

      const data = await rawResponse.json();

      document.body.removeAttribute("loading");

    }

  send();
  
}

function mountSelect(json,attribute){

    var select= element.parentElement.getElementsByTagName("selectajax")[0];
    
    race(select);

    Object.entries(jsonform).forEach(([key, value]) => {

      select.append(mountOpt(value,attribute));

    });
  
    if(json.length>=1){
      select.style.display='block';
    }else{
      select.style.display='none';
    }

}

function mountOpt(json,attribute){

  const config = JSON.parse(localstorage.config);

  var opt    = document.createElement("opt");
  var label  = document.createElement("label");
  var figure = document.createElement("figure");
  
  label.append(document.createTextNode(json.label));
  opt.setAttribute("codigo",json.codigo);
  
  
  if(json.colors!==undefined){

    figure.setAttribute("style","background-color:"+json.colors+";");

  }

  if(json.filename!==undefined){

    figure.setAttribute("style","background-image:url("+config.imgm+json.filename+"?key="+json.key+");");

  }
  
  opt.onclick=(function(){
    
    var finder = document.getElementById("finder"+attribute.name);
    var input  = document.getElementById(attribute.name);
    var select = document.getElementById("div"+attribute.name);

    var selectajax = select.getElementsByTagName("selectajax")[0];

    var labelfigure = select.getElementsByTagName("labelfigure")[0];
    
    if(json.colors!==undefined){
      
      selectajax.style.display="none";
      labelfigure.setAttribute("style","background-color:"+json.colors+";");
      
    }
    
    if(json.filename!==undefined){
      
       selectajax.style.display="none";
       labelfigure.setAttribute("style","background-image:url("+config.imgm+json.filename+"?key="+json.key+");");
      
    }
  
    let window = document.querySelector("window");
        window.setAttribute(attribute.name,json.codigo)
    
    input.value        = json.codigo;
    finder.value       = label.innerHTML;
    finder.placeholder = label.innerHTML;
    
  });
              
  opt.appendChild(figure);
  opt.appendChild(label);
  
  return opt;
  
}