import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmado',
  templateUrl: './confirmado.component.html',
  styleUrls: ['./confirmado.component.css'],
})
export class ConfirmadoComponent implements OnInit {
  nombre = '';
  sopa = '';
  comida = '';
  postre = '';
  ngOnInit(): void {
    this.nombre = sessionStorage.getItem('name');
    this.sopa = sessionStorage.getItem('sopa');
    this.comida = sessionStorage.getItem('comida');
    this.postre = sessionStorage.getItem('postre');
  }
}
