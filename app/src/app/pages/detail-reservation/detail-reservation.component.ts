import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ReservationSelector } from 'src/app/seletors/Reservation.selector';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { POST } from 'src/app/service/ItemFetch';
import { DialogSuccess } from 'src/app/components/dialog-success/dialog-success.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.css']
})
export class DetailReservationComponent implements OnInit {
  public dataSource: any;
  dataSourceItens = [];
  displayedColumns: string[] = ['Item', 'Qt selecionada', 'Valor Unit.', 'Total'];
  statusReservation = [
    { name: 'Pendente', value: 0 },
    { name: 'Em organização', value: 1 },
    { name: 'Entrege', value: 2 }
  ]
  nativeSelectFormControl = new FormControl('valid');
  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit(): void {
    if(history.state[0] == undefined)
      this.router.navigateByUrl('/reservations');
    else
      this.dataSource = history.state[0];
      this.dataSourceItens = history.state[0].itens;
  }
  viewPriceTotal(){
    let total = 0
    if(this.dataSourceItens.length > 0){
      this.dataSourceItens.map((element: any) => {
        total += element.amountDemanded * element.price
      })
      return total.toFixed(2);
    }
    else{
      return 0;
    }
  }
  getData(){
    return this.dataSource
  }
  updateStatus(){
    console.log(this.dataSource)
    if(this.dataSource?.status == this.nativeSelectFormControl.value){
      this.dataSource.status = this.nativeSelectFormControl.value
      console.log(this.dataSource)
      const settings = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.dataSource)
      };
      POST('Reservation', settings).then(e => {
        if(e.response.status == 200){
          this.dialog.open(DialogSuccess, {
            data: {
              message: 'Status atualizado com sucesso !',
              redirectTo: '/reservations' 
            },
          }); 
        }
      })
    }
    
  }
}
