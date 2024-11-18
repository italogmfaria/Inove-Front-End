import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [],
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css'] 
})
export class InicialComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // não funciona
  }
}
