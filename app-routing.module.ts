import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { PredictComponent } from './predict/predict.component';
import { RegisterComponent } from './register/register.component';
import { PowerbiComponent } from './powerbi/powerbi.component';


const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  
  {
    path:'register', component:RegisterComponent
  },{
    path:'dashboard', component:DashboardComponent
  },
  
  {
    path:'predict', component :PredictComponent
  },
  {
    path:'powerbi', component : PowerbiComponent
  }];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

