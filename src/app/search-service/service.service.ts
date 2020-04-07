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

  constructor(private http:HttpClient)
  {
    this.users=new User("","","","");
    this.repos=new Repos("","","","");
  }
getServices()
  {
    interface ApiResponse
    {
      login:string;
      public_repos:string;
      gits:string;
      html_url:string;
      avatar_url:string;
      repos_url:string;
      company:string;
    }
    let promise = new Promise((resolve,reject)=>
  {
    this.http.get<ApiResponse>(environment.apiKey).toPromise().then(response=>{

      this.users.login = response.login
      this.users.company=response.company
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
