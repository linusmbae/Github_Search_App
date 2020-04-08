import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../search-class/user';
import { Repos } from '../search-class/repos';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  users:User;
  repos:Repos;
  url="https://api.github.com/users/";
  private login:string;
  repo1:any;
  constructor(private http:HttpClient)
  {
    this.login="linusmbae";
  }

getRepos()
  {
    interface ApiResponse
    {
      login:string;
      name:string;
      html_url:string;
    }
    let promise = new Promise((resolve,reject)=>
  {
    this.http.get<ApiResponse>(this.url + this.login + "/repos?token=" + environment.apiKey).toPromise().then(response=>{
      console.log(response);
      this.repo1=response;

      resolve()
    },
    error=>
    {
      this.users.login="BlueOakTech"
      this.users.company="BlueOakTechnologies"
      reject(error)

    })
  })
return promise

  }
}
