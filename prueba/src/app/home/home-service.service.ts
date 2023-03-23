import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, debounceTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  cards$ = new BehaviorSubject(null);

  private apikey="8e8d202";
  api = "https://www.omdbapi.com/?";


  constructor(private http:HttpClient) { }

  getMethod(title:any, year:any){
    let params ={
      "t":title,
      "y":year
    }
    console.log(params.t);

    return this.http.get(this.api+"apikey="+this.apikey,{params:params});


  }



getDetails(id:any){
  let params ={
    "i":id,
  }
  return this.http.get(this.api+"apikey="+this.apikey,{params:params});
}


}
