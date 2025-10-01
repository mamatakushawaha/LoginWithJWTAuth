import { Component, OnInit } from '@angular/core';
import { AuthService, ProfileResponse } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
profile:ProfileResponse | null=null;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(){
    this.authservice.getUserProfile().subscribe(
      {
         next: (res) => {
        console.log('Profile:', res);
        this.profile = res;
      },
      error: (err) => {
        console.error('Error fetching profile', err);
      }
      }
    );
  }

}
