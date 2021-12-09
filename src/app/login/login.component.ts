import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  
  email!:string;
  password!:string;
  errorMessage!:string;
  isError:boolean=false;

  onSubmit(){
    this.auth.login(this.email,this.password).then(res =>{
          console.log(res);
          this.router.navigate(['/home']);
        }
        ).catch(
      err =>{
        console.log(err);
        this.isError = true;
        this.errorMessage=err.message;
      }
    )
  }
  
  constructor(private auth:AuthService,private router:Router ) { }

  ngOnInit(): void {
  }

}
