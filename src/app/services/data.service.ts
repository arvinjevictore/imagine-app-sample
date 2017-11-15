import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';
@Injectable()
export class DataService {

  constructor(public http:Http) { 
  	console.log('Data service connected.');
  }

  getPosts(){
  	return this.http.get('http://localhost:8080/opportunities/list')
	.map(res=>res.json())
	.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
	