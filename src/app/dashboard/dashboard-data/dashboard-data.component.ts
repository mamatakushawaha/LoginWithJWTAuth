import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-data',
  templateUrl: './dashboard-data.component.html',
  styleUrls: ['./dashboard-data.component.scss']
})
export class DashboardDataComponent implements OnInit {
  users: any[] = [];

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {

    this.authservice.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    },
    (error) => {
      console.error('Error fetching users:', error);
    }
  );
  }

}
