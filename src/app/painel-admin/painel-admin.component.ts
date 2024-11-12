import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-admin',
  standalone: true,
  imports: [],
  templateUrl: './painel-admin.component.html',
  styleUrl: './painel-admin.component.css'
})
export class PainelAdminComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
