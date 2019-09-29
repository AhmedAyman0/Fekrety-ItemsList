import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../user";
import { HomeServiceService } from "../HomeServiceService";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  users: User[];
  edit = false;
  hForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private hservice: HomeServiceService,
    private aroute: ActivatedRoute,
    private router: Router
  ) {}

  get f() {
    return this.hForm.controls;
  }
  ngOnInit() {
    this.hservice
      .getAll()
      .subscribe((resp: any) => (this.users = resp), err => console.log(err));
    this.hForm = this.formBuilder.group({
      id:['',[]],
      name: ["", [Validators.required]],
      username: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]]
    });
    this.aroute.params.subscribe(resp => {
      if (resp["id"]) {
        this.edit = true;
        let id = resp["id"];
      } else return;
    });
  }
  aEdit(id: number) {
    this.edit = true;
    if (id <= 10) {
      this.hservice.getUser(id).subscribe((resp: User) => {
        console.log(resp);
        this.hForm.setValue({
          name: resp.name,
          email: resp.email,
          username: resp.username,
          id:resp.id
        });
      });
    } else {
      let user = this.users[id - 10 - 1];
      this.hForm.setValue({
        name: user.name,
        email: user.email,
        username: user.username,
        id:user.id
      });
    }
  }
  Delete(id: number) {
    console.log(this.users,id);
    let c = confirm("Are you sure?");
    if (c) {
      this.users
      this.users = this.users.filter(a => a.id != id );
      this.hservice.deleteUser(id).subscribe(resp => console.log(resp));
    } else return false;
  }
  Edit() {
    this.edit=false;
    this.submitted=true;
    if(this.hForm.invalid){
      return
    }
    let user = this.hForm.value as User;
    console.log('user',user);
    let i = this.users.findIndex(a=>a.id==user.id);
    console.log(i);
    this.users[i].name=user.name;
    this.users[i].email=user.email;
    this.users[i].username=user.username;
    this.hForm.reset();
    this.submitted=false;
  }
  Add() {
    
    this.submitted = true;
    if (this.hForm.invalid) {
      return;
    }
    let user = this.hForm.value as User;
    user.id = this.users.length + 1;
    console.log(user);
    this.users = [this.hForm.value, ...this.users];
    this.hForm.reset();
    this.submitted=false;
  }
}
