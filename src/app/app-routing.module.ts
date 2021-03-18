import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Para navegaciones
  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
];*/

  // Para pasar datos entre páginas
  // * Ir a home.page.ts *
  { path: '', 
  redirectTo: 'home', 
  pathMatch: 'full' },

  { path: 'home', 
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  
  // En la 'id' aquí está la diferencia
  {
    path: 'pagina2/:id',
    loadChildren: () => import('./pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
