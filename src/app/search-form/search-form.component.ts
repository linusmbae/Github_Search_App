import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../search-service/service.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {


    constructor(public service:ServiceService) { }

    ngOnInit(): void
    {
      this.service.getRepos()
      this.service.getUser()


    }

}
