import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEscolasComponent } from './cadastro-escolas.component';

describe('CadastroEscolasComponent', () => {
  let component: CadastroEscolasComponent;
  let fixture: ComponentFixture<CadastroEscolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEscolasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEscolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
