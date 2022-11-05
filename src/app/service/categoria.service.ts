import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlBack } from '../constantes/url.constants';
import { CategoriaModel } from '../models/common/categoria.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url: string = urlBack.categoria;

  constructor(
    private _http: HttpClient,
    private _sessionService: SessionService
  ) { }

  getAll(): Observable<CategoriaModel[]> {
    return this._http.get<CategoriaModel[]>(this.url);

  }
  create(request: CategoriaModel): Observable<CategoriaModel> {
    return this._http.post<CategoriaModel>(this.url, request);
  }
  update(request: CategoriaModel): Observable<CategoriaModel> {
    return this._http.put<CategoriaModel>(this.url, request);
  }
  delete(idcategoria: number) {
    return this._http.delete(`${this.url}${idcategoria}`)
  }
  getById(idcategoria: number) {
    return this._http.get(`${this.url}${idcategoria}`)
  }
}
