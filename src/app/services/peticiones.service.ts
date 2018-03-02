import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
	public url:string;

	constructor(private _http: HttpClient){
		this.url = "https://jsonplaceholder.typicode.com/posts";
	}

	getPrueba(){
		return 'Hola mundo desde el servicio.';
	}

	getArticulos():Observable<any>{
		return this._http.get(this.url);
	}
}