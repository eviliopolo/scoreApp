import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { Usuario, UsuarioEstudiante, RootUsuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token: string = null;
  private usuario: Usuario = {};
  constructor(private http: HttpClient,
              private storage: Storage,
              private navCtrl: NavController ) {}

              login( email: string, password: string ) {
                const data = { email, password };            
                return new Promise( resolve => {              
            
                  this.http.post(`${ URL }/api/score/login`, data )
                    .subscribe( async resp => {
                      console.log(resp);
            
                      if ( resp['Response'] ) {
                        await this.guardarToken(resp['Message']);
                        resolve(true);
                      } else {
                        this.token = null;
                        this.storage.clear();
                        resolve(false);
                      }
                      resolve(false);            
                    });            
                });            
              }
            
              logout() {
                this.token   = null;
                this.usuario = null;
                this.storage.clear();
                this.navCtrl.navigateRoot('/login', { animated: true });
              }
            
              registro( email: string, password: string  ) {
                const data = { email, password,ConfirmPassword:password };
                return new Promise( resolve => {
            
                  this.http.post(`${ URL }/api/score/register`, data )
                      .subscribe( async resp => {
                        console.log(resp);
            
                        if ( resp['Response'] ) {
                          await this.guardarToken(resp['Message']);
                          resolve(true);
                        } else {
                          this.token = null;
                          this.storage.clear();
                          resolve(false);
                        }            
                      });          
            
                });
            
            
              }
            
              getUsuario() {
            
                if ( !this.usuario._id ) {
                  this.validaToken();
                }
            
                return { ...this.usuario };
            
              }
            
            
              async guardarToken( token: string ) {
            
                this.token = token;
                await this.storage.set('token', token);
            
                await this.validaToken();
            
            
              }
            
              async cargarToken() {
            
                this.token = await this.storage.get('token') || null;
            
              }
            
            
              async validaToken(): Promise<boolean> {
            
                await this.cargarToken();
  

            
                if ( !this.token ) {
                  this.navCtrl.navigateRoot('/login');
                  return Promise.resolve(false);
                }
            
            
                return new Promise<boolean>( resolve => {
                  this.http.get<RootUsuario>(`${ URL }/api/score/user/?token_x=${ this.token }`)
                    .subscribe( resp => {
            
                      if ( resp.Response ) {
                        console.log('Resultado',resp['Result']);
                        this.usuario.email = resp.Result.Email;
                        this.usuario.nombre = resp.Result.LastName;
                        resolve(true);
                      } else {
                        this.navCtrl.navigateRoot('/login');
                        resolve(false);
                      }
            
                    });
            
            
                });
            
              }
            
            
              actualizarUsuario( usuario: Usuario ) {                        
                const headers = new HttpHeaders({
                  'x-token': this.token
                });
            
            
                return new Promise( resolve => {
            
                  this.http.post(`${ URL }/user/update`, usuario, { headers })
                    .subscribe( resp => {
            
                      if ( resp['ok'] ) {
                        this.guardarToken( resp['token'] );
                        resolve(true);
                      } else {
                        resolve(false);
                      }
            
                    });            
                });                    
              }
}
