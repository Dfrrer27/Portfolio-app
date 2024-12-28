import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import {AnimationDirective} from "../../shared/directives/animation.directive";


@NgModule({
  declarations: [
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    HomeComponent,
    AnimationDirective
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
