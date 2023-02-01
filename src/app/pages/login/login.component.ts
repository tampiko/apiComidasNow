import { DataService } from './../../data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private dataService: DataService) {}

  login = (clave: string) => {
    let data = this.dataService.getUsuarioByClave('Florencia47');
    console.log(data);
  };
}
