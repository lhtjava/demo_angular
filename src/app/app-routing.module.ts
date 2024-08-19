import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TestApiComponent } from './components/test_api/test_api.component';
import { TestServiceComponent } from './components/test-service/test-service.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'test_api',component:TestApiComponent},
  {path:'test_service',component:TestServiceComponent},
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
