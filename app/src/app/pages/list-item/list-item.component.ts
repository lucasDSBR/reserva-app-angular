import { Component, OnInit } from '@angular/core';
import { ItemReservationSelector } from 'src/app/seletors/ItemReservation.selector';
import { GET_ALL } from 'src/app/service/ItemFetch';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogDetailItem } from 'src/app/components/dialog-detail-item/dialog-detail-item.component';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  arrayItens: any = [];
  itensReservation: any = [];
  constructor(
    public router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getAllItens()
  }

  getAllItens(){
    const settings = {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
    };
    GET_ALL('Item', settings).then(e => {
      if(e.response.status == 200){
        this.arrayItens = e.dataJson
      }
      
    })
  }

  addItem(item: any, amount: number){
    if(this.itensReservation.find((element: any) => element.idMaterialOrig == item.id)){
      if(this.itensReservation.find((element: any) => element.idMaterialOrig == item.id).amountDemanded == 1 && amount == -1)
        this.itensReservation.splice(this.itensReservation.indexOf(this.itensReservation.find((element: any) => element.idMaterialOrig == item.id)), 1);
      else
        this.itensReservation.find((element: any) => element.idMaterialOrig == item.id).amountDemanded += amount;

    }else if(!this.itensReservation.find((element: any) => element.idMaterialOrig == item.id) && amount != -1){
      let itemReservation = new ItemReservationSelector;
      itemReservation.id = null;
      itemReservation.name = item.name;
      itemReservation.price = item.price;
      itemReservation.description = item.description;
      itemReservation.fee = item.fee;
      itemReservation.amountDemanded = amount;
      itemReservation.valueFee = item.valueFee;
      itemReservation.idMaterialOrig = item.id;
      this.itensReservation.push(itemReservation)
    }
  }

  viewQuantity(item: any) {
    if(this.itensReservation.find((element: any) => element.idMaterialOrig == item.id))
      return this.itensReservation.find((element: any) => element.idMaterialOrig == item.id).amountDemanded;
    return 0;
  }

  viewPriceTotal(){
    let total = 0
    if(this.itensReservation.length > 0){
      this.itensReservation.map((element: any) => {
        total += element.amountDemanded * element.price
      })
      return total.toFixed(2);
    }
    else{
      return 0;
    }
  }

  detailItem(item: any) {
    this.dialog.open(DialogDetailItem, {
      data: item
    });
  }

  navigateReview(){
    this.router.navigateByUrl('/reviewReservation', { state: [this.itensReservation]} );
  }
}
