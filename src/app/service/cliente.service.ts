import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = "https://localhost:7009/api/"

  constructor(
    protected http: HttpClient,
  ) { }

    getAll()
    {
      return this.http.get(this.url);
    }

    getById(id:number)
    {
      return this.http.get(`${this.url}${id}`);
    }

    create(request:any)
    {
      return this.http.post(this.url, request);
    }

    update(request:any)
    {
      return this.http.put(this.url, request);
    }

    delete(id:number)
    {
      return this.http.delete(`${this.url}${id}`);
    }

}
