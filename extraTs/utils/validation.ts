import { Valid } from "./../interfaces";
import { users } from "../constant";
import { validateEmail } from "./helpers";

let validEmail = [];
let invalidEmail = [];
let myEmail = /@successive.tech\s*$/;

export function CheckEmail(users:{traineeEmail: string;reviewerEmail: string;}[]) {
  users.forEach(element => {
    let { reviewerEmail, traineeEmail } = element;

    if (validateEmail(reviewerEmail) && validateEmail(traineeEmail)) {
      validEmail.push(traineeEmail);
      validEmail.push(reviewerEmail);
    } else {
      invalidEmail.push(traineeEmail);
      invalidEmail.push(reviewerEmail);
    }
  });
  displayUsers();
}

export function displayUsers() {
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
}
