import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-review-reservation',
  templateUrl: './review-reservation.component.html',
  styleUrls: ['./review-reservation.component.css']
})
export class ReviewReservationComponent implements OnInit {
  value = 'Clear me';
  firstFormGroup = this._formBuilder.group({
    tipePayment: ['', Validators.required],
    flagCardPayment: ['']
  });
  secondFormGroup = this._formBuilder.group({
    deliveryMethod: ['', Validators.required],
    address: [''],
    addressNumber: [''],
    aeighborhood: [''],
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
}
