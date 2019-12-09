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
            
              registro( email: string, password: string, userName: string,firstName:string, lastName:string, avatar:string  ) {
                const data = { email, password,ConfirmPassword:password, userName,firstName, lastName, avatar };
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

              changePassword( OldPassword:string, NewPassword: string, ConfirmPassword: string) {
                const data = { UserId:this.token, OldPassword,NewPassword, ConfirmPassword};
                return new Promise( resolve => {
            
                  this.http.post(`${ URL }/api/score/changepassword`, data )
                      .subscribe( async resp => {
                        console.log(resp);
            
                        if ( resp['Response'] ) {                          
                          resolve(true);
                        } else {                          
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

              getCurrentUser(){                                      
                return this.usuario._id;            
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
                      console.log('RESPONSE', resp);
            
                      if ( resp.Response ) {    
                        if (!this.usuario)
                          this.usuario = {};

                        this.usuario.email = resp.Result.Email;
                        this.usuario.usuario = resp.Result.UserName;
                        this.usuario.nombre = resp.Result.FirstName;
                        this.usuario.apellido = resp.Result.LastName;
                        this.usuario.avatar = resp.Result.Avatar;
                        resolve(true);
                      } else {
                        this.navCtrl.navigateRoot('/login');
                        resolve(false);
                      }
            
                    });
            
            
                });
            
              }
            
            
              actualizarUsuario( usuario: Usuario ) {                        
                          
                return new Promise( resolve => {
            
                  this.http.get(`${ URL }/api/score/updateuser?LastName=${ usuario.apellido }&FirstName=${ usuario.nombre }&Avatar=${ usuario.avatar }&Token=${ this.token }`)
                    .subscribe( resp => {
            
                      if ( resp['Response'] ) {
                        this.guardarToken( this.token );
                        resolve(true);
                      } else {
                        resolve(false);
                      }
            
                    });            
                });                    
              }
}
