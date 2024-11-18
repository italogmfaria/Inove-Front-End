import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  onLogin(event: Event) {
    event.preventDefault();
    console.log('E-mail:', this.email);
    console.log('Senha:', this.password);
   
    this.router.navigate(['/cursos']);
  }
}