import { Component } from '@angular/core';
import { CocheEntity } from './cocheEntity';
import { PeticionesService } from '../services/peticiones.service';

@Component({
	selector: 'coches',
	templateUrl: './coches.component.html',
	providers: [PeticionesService]
})
export class CochesComponent{
	public coche: CocheEntity;
	public coches:Array<CocheEntity>;
	public articulos;

	constructor(
		private _peticionesService: PeticionesService
	){
		this.coche = new CocheEntity("", "", "");
		this.coches = [
			new CocheEntity("Camaro", "250", "Negro"),
			new CocheEntity("Nissan GT", "300", "Gris"),
		];
	}

	ngOnInit(){
		this._peticionesService.getArticulos().subscribe(
			result => {
				this.articulos = result;

				if(this.articulos){
					console.log(this.articulos);                    
                }else{
                	console.log("Error en el servidor");
                }
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	onSubmit(){
		this.coches.push(this.coche);
		this.coche = new CocheEntity("", "", "");
	}
}