window.onload=function () {
	const projects = ['ramda', 'react', 'recompose', 'meteor'];
	const content = projects.join(', ');
	console.log('Array "projects": '+content+'; Elements: '+projects.length);
	console.log("First function (r and m):");
	for (var i = 0 ; i < projects.length; i++) {
		console.log(projects[i]+": "+rAndM(projects[i]));
	}
	console.log("Second function (m after r):");
	for (var i = 0 ; i < projects.length; i++) {
		console.log(projects[i]+": "+rAfterM(projects[i]));
	}
// ---FUNCTIONS--------------------------
	function rAndM (str){
		if (~str.indexOf('r') && ~str.indexOf('m')){
			return true;
		} else {
			return false;
		}
	}
	function rAfterM (str){
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