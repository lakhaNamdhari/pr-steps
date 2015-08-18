/**
*	problem statment
*
*	@author Lakha Singh
*/

var args = process.argv.length > 2 ? JSON.parse(process.argv.slice(2)) : [];

// checks if perpendicular line segments intersect
function intersect( line1, line2 ){
	var intersection = false, value, min, max, xParallel, yParallel;

	// If live startX and endX ae equal its parallel to y axis
	if ( line1[0][0] === line1[1][0] ){
		yParallel = line1;
		xParallel = line2;
	}else{
		yParallel = line2;
		xParallel = line1;
	}

	// creating range for xAxis comparisons
	if ( xParallel[0][0] > xParallel[1][0] ){
		max = xParallel[0][0];
		min = xParallel[1][0];
	}else{
		max = xParallel[1][0];
		min = xParallel[0][0];
	}
	value = yParallel[0][0];

	// check if, x cordinates of both lines fall in same range
	if ( value >= min && value <= max ){
		// creating range for yAxis comparisons
		if ( yParallel[0][1] > yParallel[1][1] ){
			max = yParallel[0][1];
			min = yParallel[1][1];
		}else{
			max = yParallel[1][1];
			min = yParallel[0][1];
		}
		value = xParallel[0][1];

		// check if, y cordinates of both lines fall in same range
		if ( value >= min && value <= max ){
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
			case 0:
				points.push( [ x, y += A[ i ] ] );
			break;

			// Heading east
			case 1:
				points.push( [ x += A[ i ], y ] );
			break;

			// Heading south
			case 2:
				points.push( [ x, y -= A[ i ]] );			
			break;
			
			// Heading west
			case 3:
				points.push( [ x -= A[ i ], y ] );
			break;
		}

		// find intersection at this point
		switch( i ){
			case 0:
			case 1:
			case 2:
			// Do nothing, as it can't intersect at this point
			break;

			// for these cases, subtract by 3
			case 3:
			case 4:
			case 5:
				line1 = [ [x, y], points[ i - 1 ] ];
				line2 = [ points[ i - 3 ], i - 4 < 0 ? [0, 0] : points[ i - 3 ] ];
				intersection = intersect( line1, line2 );
			break;

			// all other cases, subtract by 5
			default:
				line1 = [ [x, y], points[ i - 1 ] ];
				line2 = [ points[ i - 5 ], points[ i - 6 ] ];
				intersection = intersect( line1, line2 );
			break;
		}

		if ( intersection ){
			step = i + 1;
			break;
		}
	}
	return step;
}

module.exports = solution;