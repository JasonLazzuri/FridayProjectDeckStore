import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deck } from '../deck.model';
import { DeckService } from '../deck.service';
import { FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-deckshop',
  templateUrl: './deckshop.component.html',
  styleUrls: ['./deckshop.component.css'],
  providers:[DeckService]
})

export class DeckshopComponent implements OnInit {
  decks: FirebaseListObservable<any[]>;


  constructor(private router: Router, private deckService: DeckService) { }

  goToDetailPage(clickedDeck: Deck) {
    // this.router.navigate(['deckshop', clickedDeck.id]);
  };

  ngOnInit() {
    this.decks = this.deckService.getDecks();
  }

}
