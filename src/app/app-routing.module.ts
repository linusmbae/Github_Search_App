import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitComponent } from "./git/git.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path:'git', component:GitComponent},
  {path:'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
