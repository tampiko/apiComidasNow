import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  usuarios = [
    {
      name: 'Sue Girón',
      puesto: 'Arquitecto',
      clave: 'Susana_Quintero43',
    },
    {
      name: 'Rochelle Menéndez',
      puesto: 'Arquitecto',
      clave: 'Carolina.Corona34',
    },
    {
      name: 'Glenda Krauel natera Jr.',
      puesto: 'Desarrollador',
      clave: 'Mauricio_Berríos62',
    },
    {
      name: 'Sheila Figueroa',
      puesto: 'Diseñador',
      clave: 'Eduardo.Leal',
    },
    {
      name: 'Tracy Barreto',
      puesto: 'Desarrollador',
      clave: 'Florencia47',
    },
    {
      name: 'Gordon Reyna',
      puesto: 'Arquitecto',
      clave: 'AnaLuisa.Vélez12',
    },
    {
      name: 'Ginger Aguilera',
      puesto: 'Arquitecto',
      clave: 'Ignacio.Flórez',
    },
    {
      name: 'Angelina Maya',
      puesto: 'Desarrollador',
      clave: 'Timoteo_Toledo',
    },
    {
      name: 'Sra. Beverly Archuleta',
      puesto: 'Arquitecto',
      clave: 'AlondraRomina_Salgado23',
    },
    {
      name: 'Sta. Wesley Prieto',
      puesto: 'Diseñador',
      clave: 'Ramón_Zambrano95',
    },
  ];

  menus = [
    {
      puesto: 'Desarrollador',
      menu: [
        {
          sopa: [
            'Crema de Nuez',
            'Crema de Flor de Calabaza',
            'Crema de Champiñones',
          ],
          platillo: [
            'Pechuga rellena de queso en Salsa de Huitlacoche',
            'Filete de Res en Salsa de Champiñones',
            'Filete de Pescado en Salsa de Almendras',
          ],
          postre: [
            'Crepa de Queso y Zarzamora',
            'Mil hojas de Fresa y Crema Batida',
            'Manzana al Horno con Buñuelos',
          ],
        },
      ],
    },
    {
      puesto: 'Arquitecto',
      menu: [
        {
          sopa: [
            'Crema de Cacahuate',
            'Crema de Flor de Sempasuchil',
            'Crema de Champiñones',
          ],
          platillo: [
            'Pierna Cubierta de queso en Salsa de Aguacate',
            'Carne de Bisonte en Salsa de Chile Pasilla',
            'Pierna de Pescado en Salsa de Uvas Rojas',
          ],
          postre: [
            'Crepa de Fresas y Arandanos',
            'Moose de Mango con Crema Batida',
            'Hojaldra al Horno con Piloncillo',
          ],
        },
      ],
    },
    { puesto: 'Diseñador', menu: [{
      sopa: [
        'Crema de Calabazas con Elote',
        'Crema de Frutos Rojos',
        'Crema Especial de la Casa',
      ],
      platillo: [
        'Pierna de Brontosaurio en Salsa de Amaranto',
        'Carne Resorteronte en Salsa de Betabel',
        'Lomo de Gorilla en Salsa Coco con Arandanos',
      ],
      postre: [
        'Crepa Nueces con Nutella',
        'Moose de Aguacata con Chispas de Elote',
        'Batido de Frutos Rojos con Hielo y Nueces',
      ],
    },] },
  ];

  pedidos = [
    {
      id: '12344',
      empleado: 'clave00',
      sopa: 'ewrew',
      platillo: 'ererew',
      postre: 'edsfdsfs',
    },
  ];
  constructor() {}
}
