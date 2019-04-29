// export const validateEmail = (users) => {
//   let myEmail = /@successive.tech\s*$/;

//   return users.match(myEmail);


//   };
export function validateEmail(users){
  console.log(users)
  let myEmail = /a-zA-Z0-9@successive.tech\s*$/;

  return users.match(myEmail);


  };




