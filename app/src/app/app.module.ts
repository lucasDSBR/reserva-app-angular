import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegisterItemComponent } from './pages/register-item/register-item.component';
import { ListItemComponent } from './pages/list-item/list-item.component';
import { ReservationsItemComponent } from './pages/reservations-item/reservations-item.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterItemComponent,
    ListItemComponent,
    ReservationsItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
