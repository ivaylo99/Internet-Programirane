import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class RegisterService {
  private HttpOptions = {
    headers: new HttpHeadrs({
        'Content-Type' : 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  register_info(userId) {
    return this.http.post<UserInfo>(environment.baseURL + 'users/sign-up', JSON.stringify(UserInfo), this.HttpOptions)
  }
}

export class
