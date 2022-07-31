import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'dialog-success',
  templateUrl: 'dialog-success.component.html',
  styleUrls: ['dialog-success.component.css']
})
export class DialogSuccess {
  constructor(
    public router: Router,
    public dialogRef: MatDialogRef<DialogSuccess>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    onNoClick(data: any): void {
      this.dialogRef.close();
      if(data.redirectTo != undefined)
        this.router.navigateByUrl(`${data.redirectTo}`);
    }
}