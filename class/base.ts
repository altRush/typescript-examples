export class Animal {
	species: string;

	constructor(species: string) {
		this.species = species;
	}

	profile() {
		console.log('This is a ' + this.species);
	}
}
