import { Component } from '@angular/core';
import { NgForm, NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from './../../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  cveEmp: string = '';
  constructor(private dataService: DataService, private router: Router) {}

  onSubmit(f: NgForm): void {
    console.log(this.cveEmp);
  }

  login = (clave: string) => {
    let data = this.dataService.getUsuarioByClave(this.cveEmp.trim());

    if (data.error) {
      console.log('NO');
      return;
    }

    sessionStorage.setItem('name', data.empleado.name);
    sessionStorage.setItem('clave', data.empleado.clave);
    sessionStorage.setItem('puesto', data.empleado.puesto);

    this.router.navigateByUrl('/menu');

    // let menu = JSON.parse(sessionStorage.getItem('menu') || '');
    // console.log(menu);
  };
}
