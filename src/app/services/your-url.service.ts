import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YourUrlService {

  url:string = 'https://acortadorurlapi.site/api/urls';

  constructor(private http:HttpClient){}
   
  getUrlShort(nombreUrl:string ):Observable<any> {
    const body ={
      url_destino:nombreUrl   
    }

  return this.http.post(this.url,body);
  }
}
