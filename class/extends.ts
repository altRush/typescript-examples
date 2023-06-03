import { Animal } from './base';

class Dog extends Animal {
	constructor(species: string = 'Dog') {
		super(species);
	}

	bark() {
		console.log('Woof!');
	}
}

const dog1 = new Dog();
dog1.profile();
dog1.bark();
