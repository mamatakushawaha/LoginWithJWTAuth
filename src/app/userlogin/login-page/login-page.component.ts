import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    email: string = '';
  password: string = '';

  constructor(private authservice:AuthService,private router: Router ) { }

  ngOnInit(): void {
  }

  submitLogin(formValue:NgForm){
    const userData={
      username:this.email,
      password:this.password
    };
    this.authservice.loginUser(userData).subscribe({
       next: (res) => {
        console.log('User saved in DB:', res);
        alert('Login successful');
        localStorage.setItem('token',res.token);
        localStorage.setItem('username',res.username);
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        console.error('Error saving user:', err);
        alert('Something went wrong!');
      }
    });
    // console.log(this.email,this.password  );
     formValue.resetForm(); 
  }
}
