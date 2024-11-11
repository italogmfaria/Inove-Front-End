import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoTextoComponent } from './curso-texto.component';

describe('CursoTextoComponent', () => {
  let component: CursoTextoComponent;
  let fixture: ComponentFixture<CursoTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoTextoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
