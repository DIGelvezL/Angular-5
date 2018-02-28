import { Component } from '@angular/core';
import { EmpleadoEntity } from './empleadoEntity';

@Component({
	selector: 'empleado-tag',
	templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
	public titulo = 'Componente Empleados:';
	public empleado:EmpleadoEntity;
	public trabajadores:Array<EmpleadoEntity>;
	public trabajador_externo:boolean;
	public color:string;

	constructor(){
		this.empleado = new EmpleadoEntity("Daniel Gélvez", 28, "Developer", true);
		this.trabajadores = [
			new EmpleadoEntity("Laura Gélvez", 26, "Medica", true),
			new EmpleadoEntity("Vilma Leon", 58, "Asistente", false),
			new EmpleadoEntity("David Gaitan", 18, "Estudiante", false),
		];

		this.trabajador_externo = true;
		this.color = 'green';
	}

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	cambiarExterno(valor){
		this.trabajador_externo = valor;
	}
}