import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
  standalone: true,
})
export class PaginaInicialComponent {
  
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);  
  }
}
