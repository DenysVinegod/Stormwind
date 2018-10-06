window.onload=function () {
	const projects = ['ramda', 'react', 'recompose', 'meteor'];
	alert("Array \"projects\" have "+projects.length+" elements.");
	alert("First function (r and m):");
	for (var i = 0 ; i < projects.length; i++) {
		alert(projects[i]+": "+rANDm(projects[i]));
	}
	alert("Second function (m after r):");
	for (var i = 0 ; i < projects.length; i++) {
		alert(projects[i]+": "+rAFTERm(projects[i]));
	}
// ---FUNCTIONS--------------------------
	function rANDm (str){
		if (~str.indexOf('r') && ~str.indexOf('m')){
			return true;
		} else {
			return false;
		}
	}
	function rAFTERm (str){
		if (~str.indexOf('r')){
			var str_mod = str.slice(str.indexOf('r'));
			if (~str_mod.indexOf('m')){		
				return true;
			}	else {
				return false;
			}
		} else {
			return false;
		}
	}
};