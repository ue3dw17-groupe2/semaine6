import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IgdbService } from '../igdb.service';
import { Observable } from 'rxjs/Observable';
import { Game } from '../game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  userId: string = '5678';
  gameId: string;
  score:number;
  userReviewLoaded: boolean = false;
  game: Game;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private igdbService: IgdbService)
    {
     }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.igdbService.getGame(String(id)).subscribe(game => this.game = game);
  }

  getImage(size) {
    return `//images.igdb.com/igdb/image/upload/t_${size}/${this.game.screenshots[0].cloudinary_id}.jpg`; 
  }

  toggle:boolean = false;

  doToggle():void{
     this.toggle = !this.toggle;
   }

  addReviewNull(userId: string, gameId: string) {
    this.igdbService.postReviewNull(userId, gameId);
  }

  addReviewWithScore(userId: string, gameId: string, score: number) {
    this.igdbService.postReviewWithScore(userId, gameId, score);
  }

}
