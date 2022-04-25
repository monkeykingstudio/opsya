import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter'
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { HoverMenuDirective } from './hover-menu.directive';
import { WalletComponent } from './components/view-dashboard/wallet/wallet.component';
import { TokensGraphComponent } from './components/view-dashboard/tokens-graph/tokens-graph.component';
import { UserPanelComponent } from './components/header/user-panel/user-panel.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { ViewDashboardComponent } from './components/view-dashboard/view-dashboard.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { RanksComponent } from './components/view-profile/ranks/ranks.component';
import { ChangeClassDirective } from './directives/change-class.directive';
import { RocketBlockComponent } from '../app/components/view-dashboard/rocket-block/rocket-block.component';
import { WalletOverviewComponent } from './components/view-profile/wallet-overview/wallet-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    LateralMenuComponent,
    HeaderComponent,
    HoverMenuDirective,
    WalletComponent,
    TokensGraphComponent,
    UserPanelComponent,
    ClickOutsideDirective,
    ViewDashboardComponent,
    ViewProfileComponent,
    RanksComponent,
    ChangeClassDirective,
    RocketBlockComponent,
    WalletOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAnimatedCounterModule,
    TooltipModule.forRoot(),
    NgChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
