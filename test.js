/**
*	Test cases to validate solution
*
*	@author Lakha Singh
*/

var solution = require('./solution.js');

var testCases = [
	{
		data: [1, 3, 2, 5, 4, 4, 6, 3, 2],
		output: 7
	}
];

var i, sol;

for ( i = 0; i < testCases.length; i++ ){
	sol = solution( testCases[i].data );
	if ( sol === testCases[i].output ){
		console.log('Test ' + testCases[i].data + ' Passed!');
	}else{
		console.warn('Test ' + testCases[i].data + ' Failed!');
	}
}