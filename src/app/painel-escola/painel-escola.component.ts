import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-escola',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './painel-escola.component.html',
  styleUrl: './painel-escola.component.css'
})
export class PainelEscolaComponent {
    constructor(private router: Router) {}
  
    // Navigate
    navigateTo(path: string): void {
        this.router.navigate([path]);
    }
  }
  