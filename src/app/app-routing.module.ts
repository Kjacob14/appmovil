import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'colores',
    loadChildren: () =>
      import('./contenidos/colores/colores.module').then(
        (m) => m.ColoresPageModule
      ),
  },
  {
    path: 'modal',
    loadChildren: () =>
      import('./contenidos/modal/modal.module').then((m) => m.ModalPageModule),
  },
  {
    path: 'datos',
    loadChildren: () =>
      import('./contenidos/datos/datos.module').then((m) => m.DatosPageModule),
  },
  {
    path: 'personajes',
    loadChildren: () =>
      import('./contenidos/personajes/personajes.module').then(
        (m) => m.PersonajesPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
