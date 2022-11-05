import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlBack } from '../constantes/url.constants';
import { ProductoModel } from '../models/common/producto.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string = urlBack.producto;

  constructor(
    private _http: HttpClient,
    private _sessionService: SessionService
  ) { }

  getAll(): Observable<ProductoModel[]> {
    
    return this._http.get<ProductoModel[]>(this.url);

  }
  create(request: ProductoModel): Observable<ProductoModel> {
    return this._http.post<ProductoModel>(this.url, request);
  }
  update(request: ProductoModel): Observable<ProductoModel> {
    return this._http.put<ProductoModel>(this.url, request);
  }
  delete(idproducto: number) {
    return this._http.delete(`${this.url}${idproducto}`)
  }
  getById(idproducto: number) {
    return this._http.get(`${this.url}${idproducto}`)
  }
}
