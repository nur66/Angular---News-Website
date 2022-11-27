import { TopHeadingComponent } from './top-heading/top-heading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';

const routes: Routes = [
    {path:'', component:TopHeadingComponent}, // home
    {path:'tech', component:TechnewsComponent}, // Tech News
    {path:'business', component:BusinessnewsComponent}, // Business News
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
