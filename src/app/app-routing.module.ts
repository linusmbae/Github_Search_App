import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from "./search-form/search-form.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path:'searchForm', component:SearchFormComponent},
  {path:'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
