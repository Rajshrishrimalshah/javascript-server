function star(max) {


		let row, column;

		// Number between 2 to 10 only valid inputs
		if (max < 2 || max > 10) {
			console.log(" Please enter the number between 2 to 10 only !");
		} else {
			console.log("Program Executed :\n");


		//Loop traverse upto the max value
		for (row = 0; row < max; row++) { // 'FIRST HALF' code loop
			for (column = 0; column <= max; column++) {

				if(column < max-row) // if condition executes print 'space'
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

		//REVERSE the Pattern

		//Loop traverse upto the max value
		for (row = 1; row <= max; row++) { // 'SECOND HALF' code loop
			for (column = max; column >=0; column--) {

				if(column > max-row) // if condition executes print 'space'
				{
					process.stdout.write(" ");
				}
				else			    // else condition executes print 'space'
				{
					process.stdout.write(" *");
				}

			}

			process.stdout.write("\n"); // after each row completion prints 'NEWLINE

		}	}

	}

let max = process.argv[2];
star(max); // Function Calling
