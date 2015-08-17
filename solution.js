/**
*	problem statment
*
*	@author Lakha Singh
*/

var args = process.argv.length > 2 ? process.argv.slice(2) : [];

function intersect( line1, line2 ){
	var result = false;

	return result;
}

function solution( A ){
	var step = -1, x = 0, y = 0, points = [], intersection = false;

	for ( i = 0; i < A.length; i++ ){
		switch( i % 4 ){
			// Heading north
			case 0:
				points.push( [ x, y += A[ i ]] );
			break;

			// Heading east
			case 1:
				points.push( [ x += A[ i ], y );
			break;

			// Heading south
			case 2:
				points.push( [ x, y -= A[ i ]] );			
			break;
			
			// Heading west
			case 3:
				points.push( [ x -= A[ i ], y );
			break;
		}

		// find intersection at this point
		switch( i ){
			case 0:
			case 1:
			case 2:
			// Do nothing, as it cant intersect at this point
			break;

			// for these cases, subtract by 3
			case 3:
			case 4:
			case 5:
				intersection = intersect( [], [] );
			break;

			// all other cases, subtract by 5
			default:
				intersection = intersect( [], [] );
			break;
		}

		if ( intersection ){
			step = i + 1;
			break;
		}
	}

	return step;
}

// init
solution( args );