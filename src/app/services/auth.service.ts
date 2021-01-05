import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://api.tinhocdongian.com/api';
  constructor(private http: HttpClient,
              private router: Router) { }
  login(data): Observable<any> {
    return this.http.post(this.url + '/login', data, );
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
