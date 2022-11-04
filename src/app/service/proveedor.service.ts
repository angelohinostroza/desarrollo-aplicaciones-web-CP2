import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlBack } from '../constantes/url.constants';
import { ProveedorModel } from '../models/common/proveedor.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private url: string = urlBack.proveedor;

  constructor(
    private _http: HttpClient,
    private _sessionService: SessionService
  ) { }

  getAll(): Observable<ProveedorModel[]> {
    
    return this._http.get<ProveedorModel[]>(this.url);

  }
  create(request: ProveedorModel): Observable<ProveedorModel> {
    return this._http.post<ProveedorModel>(this.url, request);
  }
  update(request: ProveedorModel): Observable<ProveedorModel> {
    return this._http.put<ProveedorModel>(this.url, request);
  }
  delete(idproveedor: number) {
    return this._http.delete(`${this.url}${idproveedor}`)
  }
  getById(idproveedor: number) {
    return this._http.get(`${this.url}${idproveedor}`)
  }
}
