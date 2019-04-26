export function validateEmail(users) {
  console.log(users);
  let myEmail = /@successive.tech\s*$/;

  return users.match(myEmail);
}
