import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCursoComponent } from './pagina-curso.component';

describe('PaginaCursoComponent', () => {
  let component: PaginaCursoComponent;
  let fixture: ComponentFixture<PaginaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
