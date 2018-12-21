import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {ISmartphone} from '../module/Smartphone';
import { Observable} from 'rxjs/observable'
@Injectable()
export class SmartphoneService {
  private _url="http://localhost:8081/animal/";
  constructor( private http:HttpClient) { }

  getSmartphone(name): Observable<ISmartphone[]>{
    return this.http.get<ISmartphone[]>(this._url+name);
  }

}
