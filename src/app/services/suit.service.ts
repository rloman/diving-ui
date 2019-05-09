import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Suit } from '../model/suit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuitService {

  private url: string = "http://localhost:8080/api";
  private endpoint: string = "suits"

  // this is called the Angular way of dependency injection
  // comparable to Spring Boot his way of using constructor based injection
  constructor(private httpClient: HttpClient) { }

  list(): Observable<Suit[]> {
    return this.httpClient.get<Suit[]>(`${this.url}/${this.endpoint}`); // returns an Observable of type User
  }
}
