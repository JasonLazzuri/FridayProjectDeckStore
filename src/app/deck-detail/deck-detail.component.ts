import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { Deck } from '../deck.model';
import { DeckService } from '../deck.service';


@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.css'],
  providers: [DeckService]
})

export class DeckDetailComponent implements OnInit {
  deckId: string;
  deckToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private deckService: DeckService
    ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.deckId = urlParameters['id'];
    });
    this.deckService.getDeckById(this.deckId).subscribe(dataLastEmittedFromObserver => {
      this.deckToDisplay = dataLastEmittedFromObserver;
      console.log(this.deckToDisplay);

    })
  }
}
