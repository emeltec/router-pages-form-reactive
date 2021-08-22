import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPermission } from '../config/permision.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

permissions: IPermission = {
    isFirstSigner: true,
    isSecondSigner: true,
    isSingleSigner: false,
    query: true,
    register: true,
    send: false
  }

  permission$ = new BehaviorSubject<IPermission>(this.permissions);

  constructor() { }


  get getPermissions(): IPermission {
    return this.permission$.getValue();
  }

  set setPermissions(values) {
    this.permission$.next(values);
  }


}
