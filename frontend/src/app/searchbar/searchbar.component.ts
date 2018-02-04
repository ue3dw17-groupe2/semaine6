import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import { IgdbService } from '../igdb.service';
import { Game } from '../game';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  games$: Observable<Game[]>;
  private searchTerms: Subject<string>;

  constructor(private igdbService: IgdbService)
  {
    this.searchTerms = new Subject<string>();
  }

  ngOnInit(): void {
    this.games$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        console.log('search '+term);
        return this.igdbService.searchGames(term);
      })
    );
  }

  search(term: string): void {
     this.igdbService.searchGames(term);
  }

}
