import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},{
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
}] 

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }