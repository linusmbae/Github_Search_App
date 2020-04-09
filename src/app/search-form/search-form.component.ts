import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../search-service/service.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

    login:string;
    today=new Date();
    constructor(public service:ServiceService) { }
    seachUser()
    {
      this.service.updateUser(this.login);
      this.service.getRepos()
      this.service.getUser()
    }

    ngOnInit(): void
    {



    }

}
