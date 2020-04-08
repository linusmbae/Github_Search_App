import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../search-class/user';
import { Repos } from '../search-class/repos';
import { ServiceService } from "../search-service/service.service";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  users:User;
  private login:string;
  newUser = new User("","","","","","","");

    constructor(private http:HttpClient, public service:ServiceService)
    {
      this.login='linusmbae'
    }

    ngOnInit(): void
    {
      this.service.getRepos()

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
      this.http.get<ApiResponse>("https://api.github.com/users/" + this.login + "token=" + environment.apiKey).subscribe(data=>{

        this.users = new User(data.login,data.avatar_url,data.company,data.created_at,data.public_repos, data.gits, data.html_url)

      })

    }

}
