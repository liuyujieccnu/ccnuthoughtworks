module.exports = function main(email, suffixes) {
	Array.prototype.contains = function ( needle ) {
  		for (i in this) {
    		if (this[i] == needle) return true;
  		}
  		return false;
	}

	var suffix=email.split('@')[1];
	if(suffixes.contains(suffix)){
		return true;
	}else{
		return false;
	}
};
