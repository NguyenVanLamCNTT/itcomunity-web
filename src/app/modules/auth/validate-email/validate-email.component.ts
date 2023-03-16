import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.scss']
})
export class ValidateEmailComponent implements OnInit {
  formOTP = this.initFormOTP();
  constructor() { }

  ngOnInit(): void {
  }

  initFormOTP(): FormGroup {
    return new FormGroup({
      number1: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      number2: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      number3: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      number4: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      number5: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      number6: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
    });
  }

  nextValue(value: string): void{
    console.log(value);
    switch (value) {
      case 'number1':
        if (this.formOTP.getRawValue().number1 !== ''){
          document.getElementById('number2')?.focus();
        }
        break;
      case 'number2':
        if (this.formOTP.getRawValue().number2 !== ''){
          document.getElementById('number3')?.focus();
        } else {
          document.getElementById('number1')?.focus();
        }
        break;
      case 'number3':
        if (this.formOTP.getRawValue().number3 !== ''){
          document.getElementById('number4')?.focus();
        } else {
          document.getElementById('number2')?.focus();
        }
        break;
      case 'number4':
        if (this.formOTP.getRawValue().number4 !== ''){
          document.getElementById('number5')?.focus();
        } else {
          document.getElementById('number3')?.focus();
        }
        break;
      case 'number5':
        if (this.formOTP.getRawValue().number5 !== ''){
          document.getElementById('number6')?.focus();
        } else {
          document.getElementById('number4')?.focus();
        }
      break;
      case 'number6':
        if (this.formOTP.getRawValue().number6 !== ''){
        
        } else {
          document.getElementById('number5')?.focus();
        }
    }
  }
}
