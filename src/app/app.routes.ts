import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

// Importando os componentes standalone
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroEscolasComponent } from './cadastro-escolas/cadastro-escolas.component';
import { CadastroInstrutoresComponent } from './cadastro-instrutores/cadastro-instrutores.component';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { LoginComponent } from './login/login.component';
import { PaginaCursoComponent } from './pagina-curso/pagina-curso.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { PainelAdminComponent } from './painel-admin/painel-admin.component';

// Definir as rotas
export const routes: Routes = [
  { path: '', component: PaginaInicialComponent }, // Página inicial
  { path: 'cadastro-escolas', component: CadastroEscolasComponent },
  { path: 'cadastro-instrutores', component: CadastroInstrutoresComponent },
  { path: 'cadastro-usuarios', component: CadastroUsuariosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pagina-curso', component: PaginaCursoComponent },
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: 'pagina-usuario', component: PaginaUsuarioComponent },
  { path: 'painel-admin', component: PainelAdminComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirecionar para a página inicial se rota não for encontrada
];
