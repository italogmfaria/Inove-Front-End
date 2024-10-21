import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInstrutoresComponent } from './cadastro-instrutores.component';

describe('CadastroInstrutoresComponent', () => {
  let component: CadastroInstrutoresComponent;
  let fixture: ComponentFixture<CadastroInstrutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroInstrutoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroInstrutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
