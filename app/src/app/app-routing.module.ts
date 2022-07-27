import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './pages/list-item/list-item.component';
import { LoginComponent } from './pages/login/login.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { RegisterItemComponent } from './pages/register-item/register-item.component';
import { ReservationsItemComponent } from './pages/reservations-item/reservations-item.component';
import { ReviewReservationComponent } from './pages/review-reservation/review-reservation.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listItens', component: ListItemComponent },
  { path: 'registerItens', component: RegisterItemComponent },
  { path: 'reservations', component: ReservationsItemComponent },
  { path: 'reviewReservation', component: ReviewReservationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
