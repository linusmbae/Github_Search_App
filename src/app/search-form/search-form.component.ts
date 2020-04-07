import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../search-class/user';
import { Repos } from '../search-class/repos';
import { ServiceService } from "../search-service/service.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  users:User;
  repos:Repos;
  private login:string;
  private repos_url:string;
  newUser = new User("","","");

    constructor(private http:HttpClient, private serviceService:ServiceService)
    {
      this.login='linusmbae',
      this.repos_url='Adan_Wataz'
    }

    ngOnInit(): void
    {
      this.serviceService.getServices()
      // this.login=this.serviceService.users
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
      this.http.get<ApiResponse>("https://api.github.com/users/" + this.login).subscribe(data=>{

        this.users = new User(data.login,data.avatar_url,data.company)
        this.repos = new Repos(data.public_repos, data.gits, data.html_url,data.repos_url)
      })

    }

}
