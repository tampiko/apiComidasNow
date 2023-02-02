import { Router } from '@angular/router';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  name = '';
  clave = '';
  puesto = '';
  sopa = '';
  comida = '';
  postre = '';
  sopas: string[] = [];
  platillos: string[] = [];
  postres: string[] = [];
  errorSopa = false;
  errorComida = false;
  errorPostre = false;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.name = sessionStorage.getItem('name') || '';
    this.clave = sessionStorage.getItem('clave') || '';
    this.puesto = sessionStorage.getItem('puesto') || '';
    this.getMenu(this.puesto);
  }

  async getMenu(clave: string) {
    let elMenu = await this.dataService.getMenuByPuesto(clave);
    this.sopas = elMenu[0].sopa;
    this.platillos = elMenu[0].platillo;
    this.postres = elMenu[0].postre;

    console.log(this.sopas);

    console.log(this.platillos);

    console.log(this.postres);
  }

  revisaDatos() {
    !this.sopa ? (this.errorSopa = true) : (this.errorSopa = false);
    !this.comida ? (this.errorComida = true) : (this.errorComida = false);
    !this.postre ? (this.errorPostre = true) : (this.errorPostre = false);

    if (
      this.errorSopa == false &&
      this.errorComida == false &&
      this.errorPostre == false
    ) {
      sessionStorage.setItem('sopa', this.sopa);
      sessionStorage.setItem('comida', this.comida);
      sessionStorage.setItem('postre', this.postre);

      this.router.navigateByUrl('/confirmado');
    }
  }
}
