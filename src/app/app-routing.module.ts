import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './public/home/home.module#HomePageModule'
  },
  {
    path: 'feedback',
    loadChildren: './public/feedback/feedback.module#FeedbackPageModule'
  },
  {
    path: 'support',
    loadChildren: './public/support-form/support-form.module#SupportFormPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
