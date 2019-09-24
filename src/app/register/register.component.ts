import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
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
    console.log(this.registerForm.invalid);
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
    );
    this.router.navigateByUrl('');
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
