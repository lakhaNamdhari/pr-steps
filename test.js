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
	},
	{
		data: [3, 1, 2, 2],
		output: 4
	},
	{
		data: [5, 5, 10, 5, 7],
		output: 5
	},
	{
		data: [10,10,5,15],
		output: 4 
	},
	{
		data: [5,5,10,10,7,4,3,2,9],
		output: 8 
	},
	{
		data: [1, 2, 2, 3, 3, 4, 4, 5, 5, 3, 2],
		output: 11
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