import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Deck } from '../deck.model';
import { DeckService } from '../deck.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.css'],
  providers: [DeckService]
})
export class DeckDetailComponent implements OnInit {
  deckId: number;
  deckToDisplay: Deck;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private deckService: DeckService
    ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.deckId = parseInt(urlParameters['id']);
    });
    // this.deckToDisplay = this.deckService.getDeckById(this.deckId);

  }

}
