import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { match } from '../helper/confirm-password.validator';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css']
})
export class Example4Component implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")]],
      confirmPassword: ['', Validators.required]
    },
      {
        validators: match('password', 'confirmPassword')
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    console.log(this.registerForm.value);

    // Make sure to create a deep copy of the form-model
    const result: any = Object.assign({}, this.registerForm.value);

    console.log(JSON.stringify(result));

    //clear form fields
    this.registerForm.reset();
  }

  onReset(): void {
    this.registerForm.reset();
  }
}
