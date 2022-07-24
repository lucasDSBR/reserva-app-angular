import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register-item',
  templateUrl: './register-item.component.html',
  styleUrls: ['./register-item.component.css']
})
export class RegisterItemComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  checkoutForm = this.formBuilder.group({
    photo: null,
    mark: '',
    description: '',
    price: null,
    fee: null
  });

  ngOnInit(): void {
  }
  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
