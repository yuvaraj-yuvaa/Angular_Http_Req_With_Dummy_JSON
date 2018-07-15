import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private __postURL = "https://jsonplaceholder.typicode.com";

  constructor(private http: Http) { }

  getTestPost(data:string): Observable<any> {
    return this.http
      .get(this.__postURL+data)
      .map((response: Response) => {
        return response.json();
        
      })
      .catch(this.handleError);
  }

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }
}
