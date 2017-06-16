import { Injectable } from '@angular/core';
import { Deck } from './deck.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class DeckService {
  decks: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    this.decks = database.list('decks');
  }

  getDecks(){
    return this.decks;
  }

  addDeck(newDeck: Deck){
    this.decks.push(newDeck);
  }

  getDeckById(deckId: number){
    // for (var i = 0; i <= DECKS.length - 1; i++) {
    //   if (DECKS[i].id === deckId) {
    //     return DECKS[i];
    //   }
    // }
  }

}
