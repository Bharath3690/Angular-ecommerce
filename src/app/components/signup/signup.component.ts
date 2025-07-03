import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signup(): void {
    if (this.authService.signup(this.email, this.password)) {
      this.router.navigate(['/login']);
    } else {
      alert('Email already exists');
    }
  }
}