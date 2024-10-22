import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule]  // Importe o RouterModule aqui
})
export class AppComponent {}
