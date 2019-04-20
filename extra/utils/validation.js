let users = [
	{
		traineeEmail: "trainee1@successive.tech",
		reviewerEmail: "reviewer1@successive.tech"
	},
	{
		traineeEmail: "trainee2@successive.tech",
		reviewerEmail: "reviewer2@successive.tech"
	},
	{
		traineeEmail: "trainee3@successive.tech",
		reviewerEmail: "reviewer3@successive.tech"
	},
	{
		traineeEmail: "trainee4@gmail.com",
		reviewerEmail: "reviewer4@gmail.com"
	},
	{
		traineeEmail: "trainee4@success.tech",
		reviewerEmail: "reviewer4@success.tech"
	}
];

let validEmail = [];
let invalidEmail = [];
let myEmail = /@successive.tech\s*$/;

validateEmail(users);
displayUsers();

function validateEmail(users) {

	users.forEach(element => {
		let { reviewerEmail, traineeEmail } = element;

		if (traineeEmail.match(myEmail)) {
				validEmail.push(traineeEmail);
		} else {
			invalidEmail.push(traineeEmail);
		}

		if (reviewerEmail.match(myEmail)) {
			validEmail.push(reviewerEmail);
		} else {
			invalidEmail.push(reviewerEmail);
		}

		//console.log(reviewerEmail);
		//console.log(traineeEmail);


	});
}

function displayUsers()
{

	process.stdout.write("Total Valid Users :\n");
	console.log(validEmail.length);

	// Displaying Valid Users
	validEmail.forEach(function(value)
		{
		console.log(value);
		});


	// Displaying Inalid Users

		process.stdout.write("\nTotal Invalid Users :\n");
		console.log(invalidEmail.length);

	invalidEmail.forEach(function(value)
		{
		console.log(value);
		});

}
