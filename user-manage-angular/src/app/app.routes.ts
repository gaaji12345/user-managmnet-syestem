import {CanActivateFn, Router, Routes} from '@angular/router';
import {inject} from "@angular/core";
import {UsersService} from "./users.service";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {usersGuard} from "./users.guard";
import {UpdateuserComponent} from "./updateuser/updateuser.component";
import {UserlistComponent} from "./userlist/userlist.component";


export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [usersGuard]},
  {path: 'update/:id', component: UpdateuserComponent},
  {path: 'users', component: UserlistComponent},
  {path: '**', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];


export const adminGuard: CanActivateFn = (route, state) => {
  if (inject(UsersService).isAdmin()) {
    return true;
  }else{
    inject(Router).navigate(['/login'])
    return false
  }
};
