import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'dialog-erro',
  templateUrl: 'dialog-erro.component.html',
})
export class DialogErro {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
}