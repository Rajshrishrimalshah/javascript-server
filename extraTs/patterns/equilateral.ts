import { IEPattern } from "./../interfaces";
let equilateral: IEPattern;

 equilateral = function(n: number): void {
  let row: number, column: number;
  if (n < 2 || n > 10) {
    process.stdout.write(" Please enter the number between 2 to 10 only !");
  } else {
    process.stdout.write("Program Executed :\n");

    for (row = 0; row < n; row++) {
      for (column = 0; column <= n; column++) {
        if (column < n - row) {
          process.stdout.write(" ");
        } else {
          process.stdout.write(" *");
        }
      }
      process.stdout.write("\n");
    }
  }
};

export default equilateral;
