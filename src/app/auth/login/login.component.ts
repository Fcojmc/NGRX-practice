import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Login } from '../../models/login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  loginUsuario() {
    if (this.loginForm.invalid) { return; }
    
    const userLogin: Login = this.loginForm.value;
    Swal.fire({
      title: 'Comprobando',
      didOpen: () => {
        Swal.showLoading()
      }
    });
    this.authService.login(userLogin)
        .then(res => {
          //Loading
          Swal.close();
          this.router.navigate(['/']);
        }).catch(err => {
          Swal.fire({
            title: 'Error',
            text: err.message,
            icon: 'error',
            confirmButtonText: 'Cool'
          });
        });
  }
}
