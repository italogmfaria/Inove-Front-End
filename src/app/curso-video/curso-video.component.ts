import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-video',
  standalone: true,
  imports: [],
  templateUrl: './curso-video.component.html',
  styleUrl: './curso-video.component.css'
})
export class CursoVideoComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
