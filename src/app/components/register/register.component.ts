import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { newUser } from 'src/app/services/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  newUser = new newUser();

  //injectare router + LoginService
  constructor(private router: Router, private service: LoginService) {}

  ngOnInit(): void {}

  //functia care posteaza un nou user in API
  HandleRegister() {
    this.service.postNewUser(this.newUser).subscribe((newUser) => {});
    this.router.navigate(['dashboard']);
  }
}
