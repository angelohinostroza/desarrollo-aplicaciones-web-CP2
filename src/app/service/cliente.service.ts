import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlBack } from '../constantes/url.constants';
import { ClienteModel } from '../models/common/cliente.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: string = urlBack.cliente;
  constructor(
    private _http: HttpClient,
    private _sessionService: SessionService
  ) { }

  getAll(): Observable<ClienteModel[]> {
    //let token = this._sessionService.getVarSession("token");
    //const reqHeader = new HttpHeaders({
    //'Content-Type': 'application/json',
    //'Authorization': `Bearer ${token}`
    //});
    // return this._http.get<PersonaModel[]>(this.url, { headers: reqHeader });
    return this._http.get<ClienteModel[]>(this.url);

  }
  create(request: ClienteModel): Observable<ClienteModel> {
    return this._http.post<ClienteModel>(this.url, request);
  }
  update(request: ClienteModel): Observable<ClienteModel> {
    return this._http.put<ClienteModel>(this.url, request);
  }
  delete(idcliente: number) {
    return this._http.delete(`${this.url}${idcliente}`)
  }
  getById(idcliente: number) {
    return this._http.get(`${this.url}${idcliente}`)
  }
}
