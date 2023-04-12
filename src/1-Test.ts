class ArrayFilter {
	public array: Array<string|number>;
	private _arrayOfString: Array<string>;
	private _arrayOfNumber: Array<number>;
	private _highestNumber: number;
	
  
	constructor(array: Array<string|number>) {
		this.array = array;
		this._arrayOfString = ArrayFilter.filterArrayOfString(array);
		this._arrayOfNumber = ArrayFilter.filterArrayOfNumber(array); 
		this._highestNumber = ArrayFilter.filterHighestNumber(this._arrayOfNumber);
	}

	private static filterArrayOfString(arrayToConvert: Array<string|number>) {
		return arrayToConvert.filter((element) => typeof element === 'string') as Array<string>;
	}

	private static filterArrayOfNumber(arrayToConvert: Array<string|number>) {
		return arrayToConvert.filter((element) => typeof element === 'number') as Array<number>;
	}

	private static filterHighestNumber(arrayToGetHighestNumber: Array<number>): number {
		return Math.max(...arrayToGetHighestNumber);
	}
	
	public get arrayOfString() : Array<string> {
		return this._arrayOfString;
	}
	
	public get arrayOfNumber() : Array<number> {
		return this._arrayOfNumber;
	}
	
	public get highestNumber() : number {
		return this._highestNumber;
	}
}

export default ArrayFilter;
