import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserSnackBarComponent } from '../components/user-snack-bar/user-snack-bar.component';


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router,private _snackBar: MatSnackBar,) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      avatar:[""],
      fullName: ["", [Validators.required, Validators.minLength(10)]],
      birthDate: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      phoneNumber: [
        "",
        [Validators.required, Validators.pattern("(01)[0-9]{9}")]
      ],
      location: ["", Validators.required]
    });
  }
  get form() {
    return this.registerForm.controls;
  }
  onSubmit() {

    console.log(this.form.birthDate.errors);
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this._snackBar.openFromComponent(UserSnackBarComponent,{
      duration:2 * 1000,
    })
    this.router.navigateByUrl('/');
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
