import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  
  menu = [
    {
      titulo: 'Home',
      color: 'primary',
      icon: 'home-outline',
      ruta: '/home'
    },
    {
      titulo: 'Colores',
      color: 'success',
      icon: 'color-palette-outline',
      ruta: '/colores'
    },
    {
      titulo: 'Datos',
      color: 'danger',
      icon: 'folder-outline',
      ruta: '/datos'
    },
    {
      titulo: 'Modal',
      color: 'danger',
      icon: 'albums-outline',
      ruta: '/modal'
    },

    {
      titulo: 'Rick & Morty',
      color: 'danger',
      icon: 'person-outline',
      ruta: '/personajes'
    },

  ]

  constructor() {}
}
