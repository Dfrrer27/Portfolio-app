import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ExperienceComponent} from "./experience/experience.component";
import {ProjectsComponent} from "./projects/projects.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: '', children: [
      { path: 'home', title: 'Home', component: HomeComponent },
      { path: 'about', title: 'About' ,  component: AboutComponent },
      { path: 'experiences', title: 'Experiences' , component: ExperienceComponent },
      { path: 'projects', title: 'Projects' , component: ProjectsComponent },
      { path: '**', redirectTo: 'home' }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
