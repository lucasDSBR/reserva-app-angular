import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import { POST } from 'src/app/service/ItemFetch';
import { ReservationSelector } from 'src/app/seletors/Reservation.selector';
import { DialogSuccess } from 'src/app/components/dialog-success/dialog-success.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-review-reservation',
  templateUrl: './review-reservation.component.html',
  styleUrls: ['./review-reservation.component.css']
})
export class ReviewReservationComponent implements OnInit {
  value = 'Clear me';
  firstFormGroup = this._formBuilder.group({
    tipePayment: [null, Validators.required],
    flagCardPayment: [null]
  });
  secondFormGroup = this._formBuilder.group({
    deliveryMethod: [null, Validators.required],
    address: [null],
    addressNumber: [null],
    aeighborhood: [null],
    nameClient: [null],
    phoneNumberClient: [null]
  });
  finalitReservation = false;
  dataSource  = [];
  flagCards = [
    { name: 'Visa', value: 1 },
    { name: 'Master', value: 2 },
    { name: 'Elo', value: 3 }
  ]
  displayedColumns: string[] = ['Item', 'Qt selecionada', 'Valor Unit.', 'Total'];
  constructor(
    private _formBuilder: FormBuilder,
    public router: Router,
    public dialog: MatDialog,
    public activatedRoute: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    if(history.state[0] == undefined)
      this.router.navigateByUrl('/listItens');
    else
      this.dataSource = history.state[0];

  }
  viewPriceTotal(){
    let total = 0
    if(this.dataSource.length > 0){
      this.dataSource.map((element: any) => {
        total += element.amountDemanded * element.price
      })
      return total.toFixed(2);
    }
    else{
      return 0;
    }
  }
  viewData(){
    console.log(this.firstFormGroup)
  }

  finalityReservation(){
    let seletor = new ReservationSelector;
    seletor.itens = this.dataSource;
    seletor.tipePayment = this.firstFormGroup.value.tipePayment;
    seletor.flagCardPayment = this.firstFormGroup.value.flagCardPayment;
    seletor.deliveryMethod = this.secondFormGroup.value.deliveryMethod;;
    seletor.address = this.secondFormGroup.value.address;
    seletor.addressNumber = this.secondFormGroup.value.addressNumber;
    seletor.neighborhood = this.secondFormGroup.value.neighborhood;
    seletor.nameClient = this.secondFormGroup.value.nameClient;
    seletor.phoneNumberClient = this.secondFormGroup.value.phoneNumberClient;
    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(seletor)
    };
    POST('Reservation', settings).then(e => {
      console.log(e.dataJson)
      if(e.response.status == 201){
        this.dialog.open(DialogSuccess, {
          data: {
            message: 'Reserva feita com sucesso !',
            item: e.dataJson
          },
        });
      }
    })
  }
}
