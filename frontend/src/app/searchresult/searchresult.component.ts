import { Component, OnInit } from '@angular/core';
import { IgdbService } from '../igdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

  constructor(public igdbService: IgdbService, private router: Router) { }

  ngOnInit() {
  }

  showDetails(game) {
    if(game && game.id)
    {
      this.router.navigate(['/game', game.id]);
    }
  }

}
