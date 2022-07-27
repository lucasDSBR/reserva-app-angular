import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'dialog-detail-item',
  templateUrl: 'dialog-detail-item.component.html',
})
export class DialogDetailItem {
  constructor(
    public dialogRef: MatDialogRef<DialogDetailItem>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    ngOnInit(): void {
      console.log(this.data)
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
}