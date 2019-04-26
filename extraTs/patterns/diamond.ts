import { Ipattern } from './../interfaces';
let diamond: Ipattern;



export default diamond = (max) => {

  let row, column;
  if (max < 2 || max > 10) {
    console.log(" Please enter the number between 2 to 10 only !");
  } else {
    console.log("Program Executed :\n");

    for (row = 0; row < max; row++) {
      for (column = 0; column <= max; column++) {
        if (column < max - row) {
          process.stdout.write(" ");
        } else {
          process.stdout.write(" *");
        }
      }

      process.stdout.write("\n");
    }
    for (row = 1; row <= max; row++) {
      for (column = max; column >= 0; column--) {
        if (column > max - row) {
          process.stdout.write(" ");
        } else {
          process.stdout.write(" *");
        }
      }

      process.stdout.write("\n");
    }
  }
};
