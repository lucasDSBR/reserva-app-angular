import { Component, OnInit } from '@angular/core';
import { GET_ALL } from 'src/app/service/ItemFetch';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-reservations-item',
  templateUrl: './reservations-item.component.html',
  styleUrls: ['./reservations-item.component.css']
})
export class ReservationsItemComponent implements OnInit {
  arrayItens: any = [];
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getAllItens();
  }

  getAllItens(){
    const settings = {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
    };
    GET_ALL('Reservation', settings).then(e => {
      if(e.response.status == 200){
        this.arrayItens = e.dataJson
      }
      
    })
  }

  detailReservation(reservation: any){
    this.router.navigateByUrl('/detailReservation', { state: [reservation]} );
  }

  formatDate(date: any){
    let newDate = new Date(date);

    let dateFormat = ("0" + newDate.getDate()).slice(-2) + "/" + ("0"+(newDate.getMonth()+1)).slice(-2) + "/" +
    newDate.getFullYear() + " " + ("0" + newDate.getHours()).slice(-2) + ":" + ("0" + newDate.getMinutes()).slice(-2);
    return dateFormat;
  }

}
