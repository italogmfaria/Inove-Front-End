import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './painel-admin.component.html',
  styleUrls: ['./painel-admin.component.css'],
})
export class PainelAdminComponent {
  activeTab: 'usuarios' | 'escolas' | 'cursos' = 'usuarios';

  // Modal states
  showAddUserModal: boolean = false;
  showUpdateUserModal: boolean = false;
  showSchoolModal: boolean = false;
  showNewSchoolModal: boolean = false;
  showCourseModal: boolean = false;

  // Form data for modals
  newUser = { nome: '', email: '', cpf: '', tipo: '', senha: '' };
  selectedUser = { nome: '', email: '', cpf: '', tipo: '' };

  selectedSchool = { nome: '', email: '', cidade: '', estado: '' };
  newSchool = { nome: '', email: '', cidade: '', estado: '', senha: '' };

  newCourse = { titulo: '', descricao: '', instrutor: '' };
  selectedCourse = { titulo: '', descricao: '', instrutor: '' };

  // Data samples
  usuarios = [
    { nome: 'João Silva', email: 'joao.silva@example.com', cpf: '123.456.789-00', tipo: 'Instrutor' },
    { nome: 'Maria Oliveira', email: 'maria.oliveira@example.com', cpf: '987.654.321-00', tipo: 'Estudante' },
    { nome: 'Carlos Almeida', email: 'carlos.almeida@example.com', cpf: '111.222.333-44', tipo: 'Admin' },
  ];

  escolas = [
    { nome: 'Escola Municipal Maria Cândida de Jesus', email: 'contato@escolammcj.com', cidade: 'São Paulo', estado: 'SP' },
    { nome: 'Escola XYZ', email: 'contato@escolaxyz.com', cidade: 'Rio de Janeiro', estado: 'RJ' },
  ];

  cursos = [
    { titulo: 'Curso 1', descricao: 'Descrição do Curso 1', instrutor: 'João Silva' },
    { titulo: 'Curso 2', descricao: 'Descrição do Curso 2', instrutor: 'Maria Oliveira' },
  ];

  constructor(private router: Router) {}

  // Getter
  get instrutores() {
    return this.usuarios.filter((user) => user.tipo === 'Instrutor');
  }

  // Tabs
  changeTab(tab: 'usuarios' | 'escolas' | 'cursos'): void {
    this.activeTab = tab;
  }

  // User Management
  toggleAddUserModal(): void {
    this.resetNewUser();
    this.showAddUserModal = true;
    this.showUpdateUserModal = false; 
  }

  toggleUpdateUserModal(user: any): void {
    this.selectedUser = { ...user };
    this.showAddUserModal = false; 
    this.showUpdateUserModal = true;
  }

  closeUserModals(): void {
    this.resetNewUser();
    this.selectedUser = { nome: '', email: '', cpf: '', tipo: '' };
    this.showAddUserModal = false;
    this.showUpdateUserModal = false;
  }

  addUser(): void {
    if (
      this.newUser.nome &&
      this.newUser.email &&
      this.newUser.cpf &&
      this.newUser.tipo &&
      this.newUser.senha
    ) {
      const exists = this.usuarios.some((u) => u.cpf === this.newUser.cpf);
      if (!exists) {
        this.usuarios.push({ ...this.newUser });
        this.closeUserModals();
      } else {
        alert('CPF já cadastrado. Atualize o usuário existente.');
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  updateUser(): void {
    const index = this.usuarios.findIndex((u) => u.cpf === this.selectedUser.cpf);
    if (index >= 0) {
      this.usuarios[index] = { ...this.selectedUser };
      alert('Usuário atualizado com sucesso!');
      this.closeUserModals(); 
    } else {
      alert('Erro ao atualizar usuário.');
    }
  }

  toggleSchoolModalForNew(): void {
    this.selectedSchool = { nome: '', email: '', cidade: '', estado: '' };
    this.showSchoolModal = true;
  }

  // Courses Management
  toggleModal(course?: any): void {
    if (course) {
      this.newCourse = { ...course };
    } else {
      this.newCourse = { titulo: '', descricao: '', instrutor: '' };
    }
    this.showCourseModal = !this.showCourseModal;
  }

  toggleSchoolModal(school?: any): void {
    if (school) {
      this.selectedSchool = { ...school }; 
    } else {
      this.selectedSchool = { nome: '', email: '', cidade: '', estado: '' }; 
    }
    this.showSchoolModal = true;
  }
  
  closeSchoolModal(): void {
    this.selectedSchool = { nome: '', email: '', cidade: '', estado: '' }; 
    this.showSchoolModal = false;
  }

  // Alternar modal de adicionar nova escola
  toggleNewSchoolModal(): void {
    this.newSchool = { nome: '', email: '', cidade: '', estado: '', senha: '' };
    this.showNewSchoolModal = !this.showNewSchoolModal;
  }

  // Adicionar nova escola
  addNewSchool(): void {
    if (
      this.newSchool.nome &&
      this.newSchool.email &&
      this.newSchool.cidade &&
      this.newSchool.estado &&
      this.newSchool.senha
    ) {
      const exists = this.escolas.some((e) => e.nome === this.newSchool.nome);
      if (!exists) {
        this.escolas.push({ ...this.newSchool });
        this.toggleNewSchoolModal(); // Fechar modal
      } else {
        alert('Uma escola com este nome já está cadastrada.');
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  
  addSchool(): void {
    if (
      this.selectedSchool.nome &&
      this.selectedSchool.email &&
      this.selectedSchool.cidade &&
      this.selectedSchool.estado
    ) {
      const exists = this.escolas.some((e) => e.nome === this.selectedSchool.nome);
      if (!exists) {
        this.escolas.push({ ...this.selectedSchool });
      } else {
        alert('Já existe uma escola com esse nome.');
      }
      this.closeSchoolModal();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  
  updateSchool(): void {
    const index = this.escolas.findIndex((e) => e.nome === this.selectedSchool.nome);
    if (index >= 0) {
      this.escolas[index] = { ...this.selectedSchool };
      alert('Escola atualizada com sucesso!');
      this.closeSchoolModal();
    } else {
      alert('Erro ao atualizar escola.');
    }
  }
  
  toggleCourseModal(course?: any): void {
    if (course) {
      this.newCourse = { ...course }; 
    } else {
      this.newCourse = { titulo: '', descricao: '', instrutor: '' }; 
    }
    this.showCourseModal = true;
  }
  
  closeCourseModal(): void {
    this.newCourse = { titulo: '', descricao: '', instrutor: '' }; 
    this.showCourseModal = false;
  }
  
  addCourse(): void {
    if (
      this.newCourse.titulo &&
      this.newCourse.descricao &&
      this.newCourse.instrutor
    ) {
      const exists = this.cursos.some((c) => c.titulo === this.newCourse.titulo);
      if (!exists) {
        this.cursos.push({ ...this.newCourse });
      } else {
        alert('Já existe um curso com esse título.');
      }
      this.closeCourseModal();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  
  updateCourse(): void {
    const index = this.cursos.findIndex((c) => c.titulo === this.newCourse.titulo);
    if (index >= 0) {
      this.cursos[index] = { ...this.newCourse };
      alert('Curso atualizado com sucesso!');
      this.closeCourseModal();
    } else {
      alert('Erro ao atualizar curso.');
    }
  }
  
  deleteItem(category: 'usuarios' | 'escolas' | 'cursos', index: number): void {
    const confirmDelete = confirm('Tem certeza que deseja excluir este item?');
    if (confirmDelete) {
      if (category === 'usuarios') {
        this.usuarios.splice(index, 1);
      } else if (category === 'escolas') {
        this.escolas.splice(index, 1);
      } else if (category === 'cursos') {
        this.cursos.splice(index, 1);
      }
    }
  }
  

  // Utility
  private resetNewUser(): void {
    this.newUser = { nome: '', email: '', cpf: '', tipo: '', senha: '' };
  }

  // Navigate
  navigateTo(path: string): void {
      this.router.navigate([path]);
  }
}
