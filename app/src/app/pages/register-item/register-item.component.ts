import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ItemSelector } from 'src/app/seletors/Item.selector';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogErro } from 'src/app/components/dialog-erro/dialog-erro.component';
import { POST } from 'src/app/service/ItemFetch';
import { DialogSuccess } from 'src/app/components/dialog-success/dialog-success.component';

@Component({
  selector: 'app-register-item',
  templateUrl: './register-item.component.html',
  styleUrls: ['./register-item.component.css']
})
export class RegisterItemComponent implements OnInit {
  HasFee = false;
  fileToUpload: File | null = null;
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) { }

  checkoutForm = this.formBuilder.group({
    photo: '',
    mark: '',
    description: '',
    price: 0,
    fee: 0,
    Hasfee: false,
    amount: 0
  });

  ngOnInit(): void {
  }
  handleFileInput(dataFiles: any) {
    this.fileToUpload = dataFiles.target.files.item(0);
  }
  onSubmit(): void {
    if(this.checkoutForm.value.mark == null || this.checkoutForm.value.description == null || this.checkoutForm.value.price == null){
      
      this.dialog.open(DialogErro, {
        data: {
          messageErro: 'Você esqueceu de preencher alguns campos.',
        },
      });
    }else {
      const formData: FormData = new FormData();
      
      let seletor = new ItemSelector;
      seletor.name = this.checkoutForm.value.mark;
      seletor.description = this.checkoutForm.value.description;
      seletor.fee = this.HasFee;
      seletor.valueFee = this.checkoutForm.value.fee;
      seletor.price = this.checkoutForm.value.price;
      seletor.amount = this.checkoutForm.value.amount;
      formData.append('photo', this.fileToUpload? this.fileToUpload: '');
      formData.append('Item', JSON.stringify(seletor));
      const settings = {
        method: 'POST',
        body: formData
      };
      POST('Item', settings).then(e => {
        if(e.response.status == 201){
          this.dialog.open(DialogSuccess, {
            data: {
              message: 'Item registrado com sucesso !',
            },
          });
        }
      })
      this.checkoutForm.reset();
    }
    
  }
}
