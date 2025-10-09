import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProfileResponse {
  username: string;
  email: string;

}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private username='login';
  // private password='login123';

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  loginUser(userData: any): Observable<any> {
    //  const headers = new HttpHeaders({
    //   Authorization: 'Basic ' + btoa(this.username + ':' + this.password)
    // });
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  getUserProfile(): Observable<ProfileResponse> {
    const token = localStorage.getItem('token');
    // console.log(token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ProfileResponse>(`${this.apiUrl}/profile`, { headers });
  }

  getAllUsers(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/getAll`, { headers });
  }
  isLoggedIn():boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
   getUsername(): string | null {
    return localStorage.getItem('username');
  }

}
