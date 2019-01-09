import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.signin(form.value.email, form.value.password);
  }

}
