import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPermission } from 'src/app/config/permision.interface';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  permissions$: Observable<IPermission>;

  constructor(
    private service: CommonsService
    ) {
      this.permissions$ = this.service.permission$.asObservable();
    }

  ngOnInit(): void {
  }

}
