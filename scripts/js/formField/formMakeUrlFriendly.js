
function makeUrlFriendly(object){
	
	function convertToSlug(str){
		
 str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  var to   = "aaaaaeeeeeiiiiooooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
			
	}
	
	var label = got(object,"input")[0]; 
	var url = cE("input");
	
	url.setAttribute('name','url');
	url.setAttribute('type','hidden');
	
	object.appendChild(url);
	
	url.setAttribute("value",convertToSlug(label.value));
	
	label.onkeyup = (function() {
		
		url.setAttribute("value",convertToSlug(this.value));
		
	});
	
	label.onblur = (function() {
		
		url.setAttribute("value",convertToSlug(this.value));
		
	});
	
}