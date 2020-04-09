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

getUser()
{
  interface ApiResponse
  {
    login:string;
    public_repos:string;
    gits:string;
    html_url:string;
    avatar_url:string;
    company:string;
    created_at:any;
  }
  let promise=new Promise((resolve,reject)=>
{
  this.http.get<ApiResponse>(this.url + this.login + "?token=" + environment.apiKey).subscribe(data=>{

    this.users = new User(data.login,data.avatar_url,data.company,data.created_at,data.public_repos, data.gits, data.html_url)
    resolve()
  })
})
return promise
}

getRepos()
  {
    interface ApiResponse
    {
      login:string;
      name:string;
      html_url:string;
      forks:number;
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

  updateUser(login:string)
  {
    this.login=login;
  }
}
