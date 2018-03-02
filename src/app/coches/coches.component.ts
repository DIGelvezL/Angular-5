import { Component } from '@angular/core';
import { CocheEntity } from './cocheEntity';

@Component({
	selector: 'coches',
	templateUrl: './coches.component.html'
})
export class CochesComponent{
	public coche: CocheEntity;
	public coches:Array<CocheEntity>;

	constructor(){
		this.coche = new CocheEntity("", "", "");
		this.coches = [
			new CocheEntity("Camaro", "250", "Negro"),
			new CocheEntity("Nissan GT", "300", "Gris"),
		];
	}

	onSubmit(){
		this.coches.push(this.coche);
		this.coche = new CocheEntity("", "", "");
	}
}