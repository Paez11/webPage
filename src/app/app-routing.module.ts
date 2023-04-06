import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { Error404Component } from './pages/error404/error404.component';
import { AboutComponent } from './pages/about/about.component';
import { DownloadComponent } from './pages/download/download.component';

const routes: Routes = [
  {path:'Blog', component:BlogComponent},
  {path:'Download', component:DownloadComponent},
  {path:'About', component:AboutComponent},
  {path:'', redirectTo:'Blog', pathMatch:'full'},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
