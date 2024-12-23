import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  constructor(private router: Router) {}

  courseCreationDate: Date = new Date('2024-11-26'); 
  lastUpdateDate: Date = new Date('2024-11-27'); 

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
