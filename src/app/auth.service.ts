import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email:string,password:string){
    this.afAuth
        .signInWithEmailAndPassword(email,password)
        .then(res =>{
          console.log(res);
          this.router.navigate(['/home']);
        }
        )

  }

  constructor(private afAuth:AngularFireAuth,private router:Router) { }
}
