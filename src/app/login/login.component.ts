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
    // Aqui você pode integrar com o serviço de autenticação ou back-end
    console.log('E-mail:', this.email);
    console.log('Senha:', this.password);
    // Exemplo de navegação após login bem-sucedido
    this.router.navigate(['/cursos']);
  }
}