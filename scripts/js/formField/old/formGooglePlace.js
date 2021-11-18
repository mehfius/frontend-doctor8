
function autoComplete(object,codigo){
	
	var label = goap(object,"name","label");
	
	var input = label[0];
	
	
	var datalist= cE("suggestsplaces");

	object.appendChild(datalist);
	
	input.onkeyup = function() {
		
		var url=localStorage.getItem("url")+'/admin/json/jsonGoogleplace.php?url='+this.value;

		xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function() {

			race(datalist);
		
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

				var json = JSON.parse(xmlhttp.responseText);
				//console.log(json.predictions.length);
				
				for(x=0;x<json.predictions.length;x++){
					//console.log(x);
					console.log(json.predictions[x].description);
					
					var option = cE("option");
					var text = cT(json.predictions[x].description);
					
					option.setAttribute("place_id",json.predictions[x].place_id);
					option.appendChild(text);
					
					option.onclick=(function(){
						
						var url=localStorage.getItem("url")+'/admin/json/jsonGoogleplacedetails.php?place_id='+this.getAttribute("place_id");

						xmlhttp = new XMLHttpRequest();

						xmlhttp.onreadystatechange = function() {
							
							if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

								var json = JSON.parse(xmlhttp.responseText);
								
								var item=goa("c",codigo)[0];
								var address=goap(item,"name","address")[0];
								var contact=goap(item,"name","contact")[0];
								var googlemaps=goap(item,"name","googlemaps")[0];
								
								console.log(item);
								address.value=json.result.formatted_address;
								contact.value=json.result.international_phone_number;
								googlemaps.value=json.result.geometry.location.lat+","+json.result.geometry.location.lng;
								input.value=json.result.name;

								
							}
							
						};

						xmlhttp.open("GET", url, true);
						xmlhttp.send();
						
					});
					
					datalist.appendChild(option);
				
				}
				
			}

		};

		xmlhttp.open("GET", url, true);
		xmlhttp.send();
		
	};

}