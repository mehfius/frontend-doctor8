function formMount(modules,id){

  var config    = JSON.parse(localStorage.config);
	var user      = JSON.parse(localStorage.user);

  console.log(config.form);

  (async () => {
    const rawResponse = await fetch(config.form, {
    method: 'POST',
    headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    body: JSON.stringify({session:user.session,modules:modules,id:id})
    });

    const data = await rawResponse.json();

		formMountFields(modules,data);

  })();

}