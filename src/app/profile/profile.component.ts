import { AuthService } from './../auth.service';
import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  panelOpenState = false;
  projects$!: Observable<any | null>;
  userId!:any;

  constructor(private ProfileService:ProfileService, public authServise:AuthService) { }

  deleteProject(id:string){
    this.ProfileService.deleteProject(this.userId,id)
  }

  

  ngOnInit(): void {
    this.authServise.getUser().subscribe(
      user =>{
        this.userId = user?.uid;
        this.projects$ = this.ProfileService.getProject(this.userId)
      }
    )
  }

}
