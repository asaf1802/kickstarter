import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 email!:string;
 password!:string;


  onSubmit(){
    this.auth.login(this.email,this.password)

  }
  
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

}
