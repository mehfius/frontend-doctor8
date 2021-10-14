function modulesOpen(e){
	
	var body    = got(document,'body')[0];
	var codigo 	= e.getAttribute('c');
	var modules = e.getAttribute('modules');

	e.appendChild(boxLoad());

	race(got(document,"view")[0]);

	changeTitle(modules);
  
	var menu    = cE("menu");

	var view    = got(document,'view')[0];
  
    menu.appendChild(btNew());
    menu.appendChild(btFilter());
    view.appendChild(menu); 

  
 if(modules=="prontuarios" || modules=="prontuariosmedicos" || modules=="pacientes"){

    window.onscroll=lazyload;    
   
 }else{
   
    window.onscroll=null;

    
 }

  
  sA(body,'modules',modules);

  
	tabelaLoad(modules,function(list){
    
    rE(got(document,"box"));
    boxFilter();
    document.body.setAttribute("loading","0");
    view.appendChild(list); 
    
	});


 
}
