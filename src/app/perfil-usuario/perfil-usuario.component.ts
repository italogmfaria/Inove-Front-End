import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
})
export class PerfilUsuarioComponent {
  activePanel: 'cursos' | 'dados' = 'cursos';

  // User data
  user = {
    nome: 'João Silva',
    email: 'joao.silva@example.com',
    cpf: '123.456.789-00',
  };

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  switchPanel(panel: 'cursos' | 'dados'): void {
    this.activePanel = panel;
  }
}
