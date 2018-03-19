import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import config from '../../../config/api.js'
import 'rxjs/Rx';

@Injectable()
export class UserServiceService {
  constructor(private http: Http) { }
  listUser() {
    console.log("CONFIG", config)
    return this.http.get("https://reqres.in/api/users?page=1")
      .map((response: Response) => {
        return response
      })
  }
}
