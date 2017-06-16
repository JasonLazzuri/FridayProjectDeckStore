import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { DeckService } from '../deck.service';
import { Router } from '@angular/router';
import { Deck } from '../deck.model';



@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css'],
  providers:[DeckService]
})

export class DecksComponent implements OnInit {
  decks: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByCategory: string = "allDecks";



  constructor(private router: Router, private deckService: DeckService) { }

  goToDetailPage(clickedDeck) {
    this.router.navigate(['decks', clickedDeck.$key]);
  }

  ngOnInit() {
    this.decks = this.deckService.getDecks();
  }

  onChange(optionFromMenu) {
    this.filterByCategory = optionFromMenu;
  }

}
