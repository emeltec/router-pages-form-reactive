import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  form: FormGroup = new FormGroup({
    isFirstSigner: new FormControl(),
    isSecondSigner: new FormControl(),
    isSingleSigner: new FormControl(),
    query: new FormControl(),
    register: new FormControl(),
    send: new FormControl(),
  })

  constructor(
    private service: CommonsService
  ) {
    this.form.patchValue({
      ...this.service.getPermissions
    })
  }

  ngOnInit(): void {

    this.form.valueChanges.subscribe(values => {
      console.log(values);
      this.service.permission$.next(values);
    })
  }

  submit(values) {
    console.log(values);
    this.service.permission$.next(values);
  }

}
