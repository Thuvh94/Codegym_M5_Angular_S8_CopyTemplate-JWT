import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from '../components/users/user-list/user-list.component';
import {UserAddComponent} from '../components/users/user-add/user-add.component';
import {UserEditComponent} from '../components/users/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'add',
    component: UserAddComponent
  },
  {
    path: 'edit',
    component: UserEditComponent
  }
];

@NgModule({
  declarations: [
    UserEditComponent,
    UserAddComponent,
    UserListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserModule { }
