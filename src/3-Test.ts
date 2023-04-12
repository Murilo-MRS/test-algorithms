class RandomID {
	private static randomString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
	private _id: string;

	constructor() {
		this._id = 'XXXX-AAAA-BBBB-CCCC';
	}

	public static getRandomArray() {
		let arrayPack: string[] = [];
		for (let index = 0; index < 4; index++) {
			const randomIndex = Math.floor(Math.random() * 62);
			const element = RandomID.randomString[randomIndex];
			arrayPack = [...arrayPack, element];
		}
		return arrayPack.join('');
	}

	public setRandomStringId() {
		let arrayPack: string[] = [];

		for (let index = 0; index < 4; index++) {
			const element = RandomID.getRandomArray();
			arrayPack = [...arrayPack, element];
		}
		this._id = arrayPack.join('-');
		return this._id;
	}

	public get id() : string {
		return this._id;
	}
}

export default RandomID;
