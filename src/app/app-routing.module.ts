import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  { path: '', redirectTo: 'banner', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule',canLoad: [ UsuarioGuard ] },
  { path: 'alerts', loadChildren: './pages/alerts/alerts.module#AlertsPageModule',canLoad: [ UsuarioGuard ] },
  { path: 'miperfil', loadChildren: './pages/miperfil/miperfil.module#MiperfilPageModule',canLoad: [ UsuarioGuard ] },
  { path: 'activos', loadChildren: './pages/activos/activos.module#ActivosPageModule',canLoad: [ UsuarioGuard ] },
  { path: 'finalizados', loadChildren: './pages/finalizados/finalizados.module#FinalizadosPageModule',canLoad: [ UsuarioGuard ] },
  { path: 'mispuntos', loadChildren: './pages/mispuntos/mispuntos.module#MispuntosPageModule',canLoad: [ UsuarioGuard ] },
  { path: 'contenidos', loadChildren: './pages/contenidos/contenidos.module#ContenidosPageModule',canLoad: [ UsuarioGuard ] },
  { path: 'microcontenidos', loadChildren: './pages/microcontenidos/microcontenidos.module#MicrocontenidosPageModule',canLoad: [ UsuarioGuard ] },
  { path: 'preguntas', loadChildren: './pages/preguntas/preguntas.module#PreguntasPageModule',canLoad: [ UsuarioGuard ] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'banner', loadChildren: './pages/banner/banner.module#BannerPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
