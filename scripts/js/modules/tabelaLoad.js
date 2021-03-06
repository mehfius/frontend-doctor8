function tabelaLoad(modules){

 var config        = JSON.parse(localStorage.config);
 var user          = JSON.parse(localStorage.user);
  let view =got(document,'view')[0];

  (async () => {
  
    const rawResponse = await fetch(config.urlmodules, {

      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify({session: user.session, modules: modules.url})

    });

    const data = await rawResponse.json();

    

    rE(got(document,"box"));
    boxFilter();
    document.body.setAttribute("loading","0");
    view.append(modulesLoad(data)); 
    
  })();

}
