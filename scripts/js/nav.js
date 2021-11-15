function navMount(){
  
  var user   = JSON.parse(localStorage.user);  
  var config          = JSON.parse(localStorage.config);
  var storagenav     = JSON.parse(localStorage.nav);

	if(gotFind("nav")){
    
		rE(got(document,"nav")[0]);

	}
	
	var html = '';
	var grade   = cE('grade');
	var nav  	  = cE('nav');
	    nav.appendChild(profile());

	var body = got(document,'body')[0];

  Object.entries(storagenav).forEach(([key, value]) => {

    var span      = createObject('{"tag":"span","innerhtml":"'+value.label+'"}');

    nav.append(span);

    Object.entries(value.modules).forEach(([key1, value1]) => {

/*       let label   = value1.label;
      let name    = value1.name;
      let premium = value1.premium;
      let c       = value1.id; */

      let {label,name,premium,c} = value1.label,value1.name,value1.premium,value1.id;

      var a      = createObject('{"tag":"a","innerhtml":"'+label+'","modules":"'+name+'","modules":"'+premium+'"}');     
      nav.append(a);

    });

  }); 

/* 
    for(var x = 0; x < storagenav.length; x++) {

      if(x===0 || storagenav[x].groups!==nav[x-1].groups){

        var span = cE('span');
        span.appendChild(cT(storagenav[x].groups));
        nav.appendChild(span);

      }

      var a 			= cE('a');
      var count 	= cE('count');


      a.setAttribute('modules',storagenav[x].name);
      a.setAttribute('premium',storagenav[x].premium);
      a.setAttribute('c',storagenav[x].codigo);
      a.appendChild(cT(storagenav[x].label));
      a.appendChild(count);

      a.onclick=(function(){
        resetHeaderOptions();
        modulesOpen(this);
        navClose();
        gridHide();
       
 

        document.body.setAttribute("loading","1");
      });

      nav.appendChild(a);

    }
		
	var a = cE('a');

	a.onclick=(function(){
 
    window.open('/','_self');

	});
	
	a.appendChild(cT('Sair')); 

	//nav.appendChild(a);
	
	 */
nav.setAttribute('id','nav');
	grade.onclick=(function(){
		
		navClose();
		formClose();

	});
	
	body.appendChild(nav);
	body.appendChild(grade);
	
	
}

function navClose(){
	
		var nav=got(document,"nav")[0];
	
				nav.setAttribute('class','hide');
	
}