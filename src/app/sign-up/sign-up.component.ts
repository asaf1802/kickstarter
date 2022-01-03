import { ProfileService } from './../profile.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email!:string;
  password!:string;
  firstName!:string;
  lastName!:string;
  errorMessage!:string;
  isError:boolean=false;
  userId!:any;

  constructor(private authService:AuthService, private router:Router,private ProfileService:ProfileService) { }
 
   
  onSubmit(){
    this.authService.SingUp(this.email,this.password).then(
      res =>{
        console.log('seccesful singUp');
        this.router.navigate(['/home']);
        /*
        this.userId= res.user?.uid
        this.ProfileService.addUser(this.userId,this.email,this.firstName,this.lastName);
        */
      }
    ).catch(
      err =>{
        console.log(err);
        this.isError = true;
        this.errorMessage=err.message;
      }
    )  
  }
  
  ngOnInit(): void {
  }

}
