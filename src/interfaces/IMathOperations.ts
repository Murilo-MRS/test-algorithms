interface IMathOperations {
  sum(args: number[]): number;
  subtraction(args: number[]): number;
  multiplication(args: number[]): number;
  division(a: number, b: number): number | string;
}

export default IMathOperations;
