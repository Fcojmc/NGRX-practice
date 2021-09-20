import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Login } from '../models/login';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth,
              private firestore: AngularFirestore) { }

  initAuthListener() {
    this.auth.authState.subscribe(fireUser => {
      console.log(fireUser)
    });
  }

  crearUsuario(newUser: User) {
    return this.auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
               .then( ({ user }) => {
                 console.log(user);
            });
  }

  login(login: Login) {
    return this.auth.signInWithEmailAndPassword(login.email, login.password);
  }

  logOut() {
    return this.auth.signOut();
  }

  isAuth() {
    return this.auth.authState.pipe(
      map( fireUser => fireUser != null )
    );
  }
}
