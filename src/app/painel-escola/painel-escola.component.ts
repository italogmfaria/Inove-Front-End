import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-escola',
  standalone: true,
  imports: [],
  templateUrl: './painel-escola.component.html',
  styleUrl: './painel-escola.component.css'
})
export class PainelEscolaComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
