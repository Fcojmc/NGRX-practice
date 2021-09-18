import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Login } from '../models/login';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  crearUsuario(user: User) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  login(login: Login) {
    return this.auth.signInWithEmailAndPassword(login.email, login.password);
  }
}
