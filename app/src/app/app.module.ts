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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './pages/login/login.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { ReviewReservationComponent } from './pages/review-reservation/review-reservation.component';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    RegisterItemComponent,
    ListItemComponent,
    ReservationsItemComponent,
    LoginComponent,
    MainMenuComponent,
    ReviewReservationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatRippleModule,
    MatSelectModule,
    MatTableModule,
    MatStepperModule,
    MatRadioModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
