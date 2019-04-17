function star(n) {


	let row, column;

		// Number between 2 to 10 only valid inputs
		if (n < 2 || n > 10) {
			console.log(" Please enter the number between 2 to 10 only !");
		} else {
			console.log("Program Executed :\n");


		//Loop traverse upto the n value
		for (row = 0; row < n; row++) { // 'FIRST HALF' code loop
			for (column = 0; column <= n; column++) {

				if(column < n-row) // if condition executes print 'space'
				{
					process.stdout.write(" ");
				}
				else			    // else condition executes print '*'
				{
					process.stdout.write(" *");
				}

			}

			process.stdout.write("\n"); // after each row completion prints 'NEWLINE'

		}

	/* //Using 2st approach 'Solve' the problem

	// Number between 2 to 10 only valid inputs
	if (n < 2 || n > 10) {
		console.log(" Please enter the number between 2 to 10 only !");
	} else {
		console.log("Program Executed :");

		let i, j, k, str="";

		//Loop traverse upto the n value
		for (i = 0; i <= n; i++) {
			for (k = 1; k <= n - i; k++) {
				str=str.concat(" "); // Concat all spaces in String str
			}
			for (j = 0; j < i; j++) {
				str=str.concat("* "); // Concat '*' in String str
			}
			console.log(str);	// Print String on 'console'
			str="";			   //  Clear the String and Repeat Same Process
		}
	}

	*/
}
}
let n = process.argv[2];
star(n);
