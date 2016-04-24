var myjquery = function(selector) {
	if(typeof selector  == "string") {
		if(selector.match("^#")) {
			return document.getElementById(selector.substr(1));		
		}else if(selector.match("^.")){
			return document.getElementsByClassName(selector.substr(1));	
		}else {
			return document.getElementByTagName(selector);		
		}
		
	}else {
		return undefined;
	}
	
}

var $ = myjquery;