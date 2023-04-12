import IMathOperations from './interfaces/IMathOperations';

class MathOperations implements IMathOperations {
	public sum(array: number[] ): number {
		return array.reduce((acc, curr) => acc + curr, 0);
	}
	public subtraction(array: number[]): number {
		return array.reduce((acc, curr) => acc - curr);
	}

	public multiplication(array: number[]): number {
		return array.reduce((acc, curr) => acc * curr, 1);
	}
	public division(a: number, b: number): number | string{
		if (b === 0) {
			return 'Cannot divide by zero';
		}
		return a / b;
	}
}

export default MathOperations;
