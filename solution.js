/**
*	problem statment
*
*	@author Lakha Singh
*/

var args = process.argv.length > 2 ? JSON.parse(process.argv.slice(2)) : [];

function processLine( line ){
	var res = {};

	if ( line[0].x === line[1].x ){
		res.x = line[0].x;
	}else if ( line[0].x < line[1].x ){
		res.minX = line[0].x;
		res.maxX = line[1].x;
	}else{
		res.minX = line[1].x;
		res.maxX = line[0].x;
	}

	if ( line[0].y === line[1].y ){
		res.y = line[0].y;
	}else if ( line[0].y < line[1].y ){
		res.minY = line[0].y;
		res.maxY = line[1].y;
	}else{
		res.minY = line[1].y;
		res.maxY = line[0].y;
	}

	return res;
}

// checks if perpendicular line segments intersect
function intersect( line1, line2 ){

	var l1 = processLine( line1 ), l2 = processLine( line2 ), intersection = false; //console.log(l1);console.log(l2);

	// Case1 : Lines running perpendicular to each other
	// 1.1 l1 is parallel to y-axis
	if ( typeof l1.x !== 'undefined' && typeof l2.y !== 'undefined' ){//console.log("<<");console.log(l1);console.log(l2);
		if ( (l2.y >= l1.minY && l2.y <= l1.maxY) && (l1.x >= l2.minX && l1.x <= l2.maxX) ){
			intersection = true;
		}
	}
	// 1.2 l1 is parallel to x-axis
	else if ( typeof l1.y !== 'undefined' && typeof l2.x !== 'undefined' ){ 
		if ( (l2.x >= l1.minX && l2.x <= l1.maxX) && (l1.y >= l2.minY && l1.y <= l2.maxY) ){
			intersection = true; 
		}
	}
	//Case 2: Line running parallel to each other
	// 2.1 l1 and l2 parallel to y-axis
	else if ( typeof l1.x !== 'undefined' && typeof l2.x !== 'undefined' ){
		if ( (l1.x && l1.x) === l2.x && ((l2.maxY >= l1.minY && l2.maxY <= l1.maxY) || (l1.maxY >= l2.minY && l1.maxY <= l2.maxY))){
			intersection = true;
		}
	}
	// 2.2 l1 and l2 parallel to x-axis
	else if ( typeof l1.y !== 'undefined' && typeof l2.y !== 'undefined' ){
		if ( (l1.y === l2.y) && ((l2.maxX >= l1.minX && l2.maxX <= l1.maxX) || (l1.maxX >= l2.minX && l1.maxX <= l2.maxX))){
			intersection = true;
		}
	}

	return intersection;
}

function solution( A ){
	var step = -1, x = 0, y = 0, points = [], intersection = false, line1, line2;

	for ( i = 0; i < A.length; i++ ){
		// save cordinates at each step ( helpful to detect intersection )
		switch( i % 4 ){
			// Heading north
			case 0:	points.push({
						x: x,
						y: y += A[ i ]
					});
			break;

			// Heading east
			case 1:	points.push({
						x: x += A[ i ],
						y: y
					});
			break;

			// Heading south
			case 2:	points.push({
						x: x, 
						y: y -= A[ i ]
					});
			break;

			// Heading west
			case 3:	points.push({
						x: x -= A[ i ],
						y: y
					});
			break;
		}

		// find intersection at this point
		// Rule : 1
		if ( i >= 3 ){
			line1 = [
				points[ i ],
				points[ i - 1 ]
			];

			line2 = [
				points[ i - 3 ],
				i - 4 < 0 ? {x: 0, y: 0} : points[ i - 4 ]
			];
//console.log(i);console.log(line1);console.log(line2)
			intersection = intersect( line1, line2 );
		}

		// Rule : 2
		if ( !intersection && i >= 6 ){
			line1 = [
				points[ i ],
				points[ i - 1 ]
			];

			line2 = [
				points[ i - 5 ],
				points[ i - 6 ]
			];

			intersection = intersect( line1, line2 );
		}

		// Rule : 3
		if ( !intersection && i === 4 ){ 
			line1 = [
				points[ i ],
				points[ i - 1 ]
			];

			line2 = [
				points[ i - 4 ],
				{x: 0, y: 0} 
			];

			intersection = intersect( line1, line2 );
		}

		if ( intersection ){
			step = i + 1;
			break;
		}
	} //console.log(points);
	return step;
}

module.exports = solution;
