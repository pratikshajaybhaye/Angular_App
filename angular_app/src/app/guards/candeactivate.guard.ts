import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard implements CanDeactivate<RegisterComponent> {
 
  canDeactivate(component: RegisterComponent) {

    return component.userName.dirty ? confirm('You have unsaved changes. Are you sure want to navigate?') : true;

  }
  
}
