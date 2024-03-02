import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';

@Injectable({
  providedIn:"root"
})

export class noAuthGuard implements CanActivate{

  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{
    if(StorageService.hasToken() && StorageService.isStudentLoggedIn()){
      this.router.navigateByUrl("/student/studentdashboard");
      return false;
    }else if(StorageService.hasToken() && StorageService.isAdminLoggedIn()){
      this.router.navigateByUrl("/admin/studentdashboard");
      return false;
    }
    return true;
  }

};
