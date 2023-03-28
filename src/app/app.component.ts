import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/inicio', icon: 'home' },
    { title: 'Ventas', url: '/folder/ventas', icon: 'cart' },
    { title: 'Proveedores', url: '/folder/proveedores', icon: 'people' },
  ];
  public labels = ['posershop'];
  constructor() {}
}
