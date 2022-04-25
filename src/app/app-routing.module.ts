import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDashboardComponent } from './components/view-dashboard/view-dashboard.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { ViewInvestmentComponent } from './components/view-investment/view-investment.component';

const routes: Routes = [
  { path: '', component: ViewDashboardComponent },
  { path: 'profile', component: ViewProfileComponent },
  { path: 'investment', component: ViewInvestmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
