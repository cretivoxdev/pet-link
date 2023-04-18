import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  authToken: any;
  private url= "http://192.168.1.253:1234/api"

  constructor(private http: HttpClient) { 

  }

  // login(formData: any){
  //   return this.http.post<any>(`${this.url}/login`, formData)
  //   .pipe(map(response => {
  //     console.log(response);
  //     if(response.token != ""){
  //       sessionStorage.setItem('currentJwt', response.token)
  //       this.authToken = sessionStorage.getItem('currentJwt')
  //       this.currentUserSubject.next(response.id)
  //     }
  //     return response.id
  //   }))
  // }

  login(username: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return this.http.post(`${this.url}/login`, formData);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getSelf(id: any){
    const token = localStorage.getItem('access_token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get<any>(this.url + "/tag/all/" + id, {headers})
  }

  allpet(){
    return this.http.get<any>(this.url +"/tag")
  }

  // Edit Profile
  editProfile(id :any, data: any){
    const token = localStorage.getItem('access_token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.put<any>(this.url + "/profile/" + id,data, {headers})
  }

  ads(){
    return this.http.get<any>(this.url + "/sa/ads")
  }
  
  adsDetail(id: any){
    return this.http.get<any>(this.url + "/sa/ads/" + id)
  }
}
