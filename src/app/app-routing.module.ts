import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'alerts', loadChildren: './pages/alerts/alerts.module#AlertsPageModule' },
  { path: 'miperfil', loadChildren: './pages/miperfil/miperfil.module#MiperfilPageModule' },
  { path: 'activos', loadChildren: './pages/activos/activos.module#ActivosPageModule' },
  { path: 'finalizados', loadChildren: './pages/finalizados/finalizados.module#FinalizadosPageModule' },
  { path: 'mispuntos', loadChildren: './pages/mispuntos/mispuntos.module#MispuntosPageModule' },
  { path: 'contenidos', loadChildren: './pages/contenidos/contenidos.module#ContenidosPageModule' },
  { path: 'microcontenidos', loadChildren: './pages/microcontenidos/microcontenidos.module#MicrocontenidosPageModule' },
  { path: 'preguntas', loadChildren: './pages/preguntas/preguntas.module#PreguntasPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
