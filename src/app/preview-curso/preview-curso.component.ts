import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview-curso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './preview-curso.component.html',
  styleUrls: ['./preview-curso.component.css'],
})
export class PreviewCursoComponent {
  constructor(private router: Router) {}

  courseCreationDate: Date = new Date('2024-11-26'); 
  lastUpdateDate: Date = new Date('2024-11-27'); 

  comments = [
    { user: 'Usuário tal', text: 'Comentário do usuário' },
    { user: 'Usuário tal', text: 'Comentário do usuário' },
    { user: 'Usuário tal', text: 'Comentário do usuário' },
  ];

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
