import { Component } from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
})
export class FrutaComponent{
	public nombre_componente = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

	public nombre:string;
	public edad:number;
	public mayorDeEdad:boolean;
	public trabajos:Array<string>;
	public trabajosAny:Array<any>;

	comodin:any;

	constructor(){
	 	this.nombre = "Daniel Gélvez";
		this.edad = 28;
		this.mayorDeEdad = false;
		this.trabajos = ['Carpintero', 'Albañil', 'fontanero'];
		this.trabajosAny = ['Carpintero', 30, 'fontanero'];

		this.comodin = 'SI';

		console.log(this.trabajosAny);
	}

	ngOnInit(){
		this.holaMundo(this.nombre);

		//Variables y alcance
		var uno = 8;
		var dos = 15;

		if(uno === 8){
			let uno = 3;
			var dos = 88;
			console.log("Dentro del IF: " + uno + " y " + dos);
		}

		console.log("Fuera del IF: " + uno + " y " + dos);
	}

	holaMundo(nombre){
		alert('Hola Mundo!! ' + nombre);
	}
}