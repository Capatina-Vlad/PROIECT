import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Users } from 'src/app/services/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  user = new Users();

  //injectare router + LoginService
  constructor(private router: Router, private service: LoginService) {}

  ngOnInit(): void {}

  //functia care posteaza user-ul curent, il salveaza in local storage si incarca dashboard-ul
  HandleLogin() {
    this.service.postUser(this.user).subscribe((user) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
    });
    this.router.navigate(['dashboard']);
  }
}
