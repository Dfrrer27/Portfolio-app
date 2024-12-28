import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicLayoutComponent} from "./layout/public-layout/public-layout.component";

const routes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full' },

  { path: '',
    component: PublicLayoutComponent,
    loadChildren: () => import('./modules/portfolio/portfolio.module').then(x => x.PortfolioModule)
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
