import {CanActivateFn, Router, Routes} from '@angular/router';
import {inject} from "@angular/core";
import {UsersService} from "./users.service";

export const routes: Routes = [];


export const adminGuard: CanActivateFn = (route, state) => {
  if (inject(UsersService).isAdmin()) {
    return true;
  }else{
    inject(Router).navigate(['/login'])
    return false
  }
};
