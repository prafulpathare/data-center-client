import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './screen/dashboard/dashboard.component';
import { JpCardComponent } from './component/jp-card/jp-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JpCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
