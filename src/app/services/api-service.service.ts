import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = "http://192.168.1.253:1234/api"
  constructor(public http: HttpClient) { }

  login(formData: any){
    return this.http.post<any>(this.url + "/login", formData)
  }
  
}
