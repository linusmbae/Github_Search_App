import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../search-class/user';
import { Repos } from '../search-class/repos';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
users:User;
repos:Repos;
  constructor(private http:HttpClient) { }

  ngOnInit(): void
  {
    interface ApiResponse
    {
      login:string;
      public_repos:string;
      gits:string;
      html_url:string;
      avatar_url:string;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/linusmbae").subscribe(data=>{

      this.users = new User(data.login,data.avatar_url)
      this.repos = new Repos(data.public_repos, data.gits, data.html_url)
    })
  }

}
