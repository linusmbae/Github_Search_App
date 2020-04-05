import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitComponent } from "./git/git.component";

const routes: Routes = [
  {path:'git', component:GitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
