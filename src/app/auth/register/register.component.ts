import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registroForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  crearUsuario() {
    if(this.registroForm.invalid) { return; }

    const user: User = this.registroForm.value;

    Swal.fire({
      title: 'Comprobando',
      didOpen: () => {
        Swal.showLoading()
      }
    });

    this.authService.crearUsuario(user)
        .then(credenciales => {
          Swal.close();
          this.router.navigate(['/login']);
        }).catch( err => {
          Swal.fire({
            title: 'Error',
            text: err.message,
            icon: 'error',
            confirmButtonText: 'Cool'
          });
        });
  }
}
