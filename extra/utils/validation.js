let validEmail = [];
let invalidEmail = [];
let myEmail = /@successive.tech\s*$/;
displayUsers();

export const validateEmail = (users) => {
  users.forEach(element => {
    let { reviewerEmail, traineeEmail } = element;

    if (traineeEmail.match(myEmail)) {
      validEmail.push(traineeEmail);
      return true;
    } else {
      invalidEmail.push(traineeEmail);
      return false;
    }

    if (reviewerEmail.match(myEmail)) {
      validEmail.push(reviewerEmail);
      return true;
    } else {
      invalidEmail.push(reviewerEmail);
      return false;
    }
  });
};

export const displayUsers = () => {
  process.stdout.write("Total Valid Users :\n");
  console.log(validEmail.length);
  validEmail.forEach(function(value) {
    console.log(value);
  });

  process.stdout.write("\nTotal Invalid Users :\n");
  console.log(invalidEmail.length);
  invalidEmail.forEach(function(value) {
    console.log(value);
  });
};
