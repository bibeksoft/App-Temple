import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TempleService {
  Id:string;
  gettemplelist(){
    return this.http.get<[]>('assets/TempleData/templedata.json');
  }
  
  constructor( private http: HttpClient) { 
   
  }
  getListId(Id){
    return this.http.get<{Id:string}[]>('assets/TempleData/templedata.json');
  }
}
