import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

   username: string = '';
   email: string = '';
   password: string = '';
   

  constructor(private authservice:AuthService ,private router: Router) { }

  ngOnInit(): void {
  }

  submitRegister(formValue:NgForm){
const user={
  username:this.username,
  email:this.email,
  password:this.password
};

    this.authservice.registerUser(user).subscribe({
      next: (res) => {
        console.log('User saved in DB:', res);
        alert('Registration successful, data stored in DB!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error saving user:', err);
        alert('Something went wrong!');
      }
    });
    formValue.resetForm();
   
  
  }

}
