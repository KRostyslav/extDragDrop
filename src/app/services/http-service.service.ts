import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../components/tab/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  getFakeJson():Observable<UserModel[]>{
    return this._http.get<UserModel[]>('../../assets/fake.json')
  }
}
