import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { IgdbService, Game } from '../../../services/igdb.service';

@Component({
  selector: 'app-igdb-results',
  templateUrl: './igdb-results.component.html',
  styleUrls: ['./igdb-results.component.css']
})
export class IgdbResultsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() search: string;
  @Output() onGameSelected = new EventEmitter<Game>();
  igdbSubscription: Subscription;
  games: Game[];

  constructor(
    private igdbService: IgdbService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.igdbSubscription) {
      this.igdbSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (this.igdbSubscription) {
      this.igdbSubscription.unsubscribe();
    }
    for (let propName in changes) {
      if (propName) {
        let changedProp = changes[propName];
        let to =   JSON.stringify(changedProp.currentValue);
        this.igdbSubscription = this.igdbService.getGameNames(to).subscribe(
          games => {
            this.games = games;
          },
          error => console.log(<any>error)
        );
      }
    }
  }

  gameSelected(game: Game) {
    this.onGameSelected.emit(game);
  }

}
