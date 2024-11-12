import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-texto',
  standalone: true,
  imports: [],
  templateUrl: './curso-texto.component.html',
  styleUrl: './curso-texto.component.css'
})
export class CursoTextoComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
