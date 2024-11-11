import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoVideoComponent } from './curso-video.component';

describe('CursoVideoComponent', () => {
  let component: CursoVideoComponent;
  let fixture: ComponentFixture<CursoVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
