import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from '../model/country';

@Component({
  selector: 'app-loginvalidation',
  templateUrl: './loginvalidation.component.html',
  styleUrls: ['./loginvalidation.component.css']
})
export class LoginvalidationComponent implements OnInit {
  loginForm: FormGroup;

  countries: Country[] = [
    new Country(1, 'Nepal'),
    new Country(2, 'USA'),
    new Country(3, 'Canada'),
    new Country(4, 'Australia')
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")]],
      countryId: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    console.log(this.loginForm.value);

    // Make sure to create a deep copy of the form-model
    const result: any = Object.assign({}, this.loginForm.value);

    console.log(JSON.stringify(result));

    //clear form fields
    this.loginForm.reset();
  }

  onReset(): void {
    this.loginForm.reset();
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get countryId() {
    return this.loginForm.get('countryId');
  }

}
