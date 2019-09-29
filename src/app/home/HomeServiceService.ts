import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  base = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(this.base);
  }
  getUser(id: number) {
    return this.http.get(this.base + id);
  }
  addUser(user: User) { 
    return this.http.post(this.base, user);
  }
  deleteUser(id: number) {
    return this.http.delete(this.base + id);
  }
  editUser(user:User){
      return this.http.put(this.base,user);
  }
}
