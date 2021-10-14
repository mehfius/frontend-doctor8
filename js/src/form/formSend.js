function formSend(data,codigo){

    var xmlhttp;

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {

      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        var userinfo  = JSON.parse(localStorage.userinfo);


              if(userinfo.codigo==codigo){

                // Proprio Profile
                document.body.setAttribute("loading","0");

              }else{


                  if(codigo!==null){

                    loadItemJson(codigo,function(json){

                      var userinfo  = JSON.parse(localStorage.userinfo);

                        var item = gibc(codigo);
                        race(item);
                        loadItem(item,json);
                        document.body.setAttribute("loading","0");

                    });

                  }else{

                    tabelaLoad(gA(),function(tabela){
                      document.body.setAttribute("loading","0");
                      rE(got(document,'tabela'));
                      document.getElementsByTagName("view")[0].appendChild(tabela);
                    });

                  }

              }

        formClose();

      }

    };

    var url  = localStorage.getItem("url")+'/admin/json/jsonUpdate.php';

    document.body.setAttribute("loading","1");

    data.append("session",localStorage.session);    
    data.append("area",got(document,"window")[0].getAttribute("modules")); 
    data.append("acao","update");
    data.append("codigo",codigo);

    xmlhttp.open("POST", url, true);
    xmlhttp.send(data);
  
}