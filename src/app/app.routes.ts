import { Routes } from '@angular/router';

import { InicialComponent } from './inicial/inicial.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { CursoVideoComponent } from './curso-video/curso-video.component';
import { CursoTextoComponent } from './curso-texto/curso-texto.component';
import { PainelAdminComponent } from './painel-admin/painel-admin.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroEscolaComponent } from './cadastro-escola/cadastro-escola.component';
import { PainelEscolaComponent } from './painel-escola/painel-escola.component';
import { CadastroInstrutorComponent } from './cadastro-instrutor/cadastro-instrutor.component';
import { AcessoPlataformaComponent } from './acesso-plataforma/acesso-plataforma.component';
import { AguardeComponent } from './aguarde/aguarde.component';
import { SejaInstrutorComponent } from './seja-instrutor/seja-instrutor.component';

export const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent },
  { path: 'curso-video', component: CursoVideoComponent },
  { path: 'curso-texto', component: CursoTextoComponent },
  { path: 'painel-admin', component: PainelAdminComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'cadastro-escola', component: CadastroEscolaComponent },
  { path: 'painel-escola', component: PainelEscolaComponent },
  { path: 'cadastro-instrutor', component: CadastroInstrutorComponent },
  { path: 'acesso-plataforma', component: AcessoPlataformaComponent },
  { path: 'aguarde', component: AguardeComponent },
  { path: 'seja-instrutor', component: SejaInstrutorComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redireciona para a página inicial se a rota não for encontrada
];
