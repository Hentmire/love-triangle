/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var loveTriangles = 0;
 	for (var i = 1; i <= preferences.length; i++) {
	  	var firstlover = preferences[i-1];
	  	if (firstlover != i) {  // если первый чел не любит сам себя 
	  		var secondLover = preferences[firstlover-1];
	  		if (secondLover != firstlover && secondLover != i) { // если второй чел не любит сам себя и не любит первого чела
	  			if (preferences[secondLover-1] == i) { // если третий чел любит первого чела
	  				loveTriangles += 1;
	  			}
	  		}
	  	}
    }
    return (loveTriangles / 3);
};
