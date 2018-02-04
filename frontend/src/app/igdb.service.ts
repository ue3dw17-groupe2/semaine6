import { Injectable } from '@angular/core';
import { Game } from './game';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'json' as 'json'
};

@Injectable()
export class IgdbService {

  baseUrl:string = 'http://localhost:3000';
  currentResult: Observable<Game[]>;

  constructor(private http:HttpClient) {
    this.currentResult = of([]);
  }

  searchGames(text: string): Observable<Game[]> {
    if (!text.trim()) {
      this.currentResult = of([]);
    }else{
      const url = `${this.baseUrl}/search/${text}`;
      this.currentResult = this.http.get<Game[]>(url,httpOptions);
    }
    return this.currentResult;
  }

  getGame(id:string): Observable<Game> {
    const url = `${this.baseUrl}/game/${id}`;
    return this.http.get<Game>(url,httpOptions);
  }  

  postReviewNull(userId: string, gameId: string) {
    const url = `${this.baseUrl}/users/${userId}/games/${gameId}/review`;
    const req =  this.http.post(url,httpOptions).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  postReviewWithScore(userId: string, gameId: string, score:number) {
    const url = `${this.baseUrl}/users/${userId}/games/${gameId}/review`;
    const req =  this.http.post(url,httpOptions).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }  

}
