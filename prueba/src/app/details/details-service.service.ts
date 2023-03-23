import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsServiceService {


  private apikey="8e8d202";
  api = "https://www.omdbapi.com/?";


  constructor(private http:HttpClient) { }


  getMethod(t:string,){
    let params ={
      t:"batman",
      y:"2020"
    }
    this.http.get(this.api+this.apikey)
  }




}
