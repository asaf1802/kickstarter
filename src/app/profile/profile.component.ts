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

  ngOnInit(): void {
    this.authServise.getUser().subscribe(
      user =>{
        this.userId = user?.uid;
        this.projects$ = this.ProfileService.getProject(this.userId)
      }
    )
    //this.projects$ = this.ProfileService.getProject();
  }

}
