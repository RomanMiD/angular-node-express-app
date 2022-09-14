import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { UserModel } from '../models/user.model'
import { environment } from 'src/environments/environment'



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private basePath = `${environment.apiUrl!}/user`
  constructor(private http: HttpClient) { }

  getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.basePath)
  }

  get(id: any): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.basePath}/${id}`)
  }

  create(data: any): Observable<any> {
    console.log("from service:" + data)
    return this.http.post(this.basePath, data)

  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.basePath}/${id}`, data)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.basePath}/${id}`)
  }

}