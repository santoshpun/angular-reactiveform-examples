import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Country } from '../model/country';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component implements OnInit {
  contactForm: FormGroup;

  countries: Country[] = [
    new Country(1, 'Nepal'),
    new Country(2, 'USA'),
    new Country(3, 'Canada'),
    new Country(4, 'Australia')
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      // nested form group
      address: this.fb.group({
        countryId: ['', Validators.required],
        city: ['', Validators.required]
      })
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  get address() {
    return this.contactForm.get('address') as FormGroup;
  }

  get countryId() {
    return this.address.get('countryId');
  }

  get city() {
    return this.address.get('city');
  }

  onSubmit(): void {
    console.log(this.contactForm.value);

    // Make sure to create a deep copy of the form-model
    const result: any = Object.assign({}, this.contactForm.value);

    console.log(JSON.stringify(result));

    //clear form fields
    this.contactForm.reset();
  }

  onReset(): void {
    this.contactForm.reset();
  }
}
