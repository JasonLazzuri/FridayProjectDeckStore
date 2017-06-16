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

  getDeckById(deckId: string){
    return this.database.object('decks/'+ deckId);
  }

  updateDeck(localUpdatedDeck){
    var deckEntryInFirebase = this.getDeckById(localUpdatedDeck.$key);
    deckEntryInFirebase.update({category: localUpdatedDeck.category,
                                name: localUpdatedDeck.name,
                                cardone: localUpdatedDeck.cardone,
                                imageone: localUpdatedDeck.imageone,
                                cardtwo: localUpdatedDeck.cardtwo,
                                imagetwo: localUpdatedDeck.imagetwo,
                                cardthree: localUpdatedDeck.cardthree,
                                imagethree: localUpdatedDeck.imagethree,
                                cardfour: localUpdatedDeck.cardfour,
                                imagefour: localUpdatedDeck.imagefour,
                                cardfive: localUpdatedDeck.cardfive,
                                imagefive: localUpdatedDeck.imagefive,
                                cardsix: localUpdatedDeck.cardsix,
                                imagesix: localUpdatedDeck.imagesix,
                                cardseven: localUpdatedDeck.cardseven,
                                imageseven: localUpdatedDeck.imageseven,
                                cardeight: localUpdatedDeck.cardeight,
                                imageeight: localUpdatedDeck.imageeight,
                              });
  }

  deleteDeck(localDeckToDelete){
    var deckEntryInFirebase = this.getDeckById(localDeckToDelete.$key);
    deckEntryInFirebase.remove();
  }

}
