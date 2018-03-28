import { Injectable } from '@angular/core';
import { Table } from '../models/table.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TableService {

  private _url = 'http://localhost:3000/api/tables';

  selectedTable : Table;
  constructor(private http: HttpClient) { }

  getTables(): Observable<Table[]>{
    return this.http.get<Table[]>(this._url);
  }
}
