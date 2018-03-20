import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import config from '../../../config/api.js'
import 'rxjs/Rx';

@Injectable()
export class LoginService {
  constructor(private http: Http) { }
  login(payload) {
    return this.http.post(config.login, payload)
      .map((response: Response) => {
        return response
      })
  }
}
// function makeHeader() {
//   const headers = new Headers({
//     "Content-type": "application/json"
//   })
//   headers.append('Authorization', 'JWT ' + JSON.parse(window.localStorage.getItem("token")).token);
//   return headers;
// }