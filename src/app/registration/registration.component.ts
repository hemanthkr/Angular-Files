import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  regForm: FormGroup;

  createForm() {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      email: ['',[Validators.required, Validators.email]],
      phone: ['', Validators.required],
      courses: ['', Validators.required],
      remarks: ['']
    }); 
  }

  value: any;
  
  submit(regForm){ 
    this.value = regForm;
  }


}
