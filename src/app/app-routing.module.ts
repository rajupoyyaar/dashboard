import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {InfoComponent} from './info/info.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path : "",
    component : LoginComponent
  },
  {
    path : "home",
    component :  HomeComponent,
    children : [
     
      {
        path : "about",
        component : AboutComponent
      },
      {
        path : "info",
        component : InfoComponent
      },
      {
        path : "profile",
        component : ProfileComponent
      },
      {
        path : "settings",
        component : SettingsComponent
      },
     ], 
    },
    {
      path : "**",
      component : PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
