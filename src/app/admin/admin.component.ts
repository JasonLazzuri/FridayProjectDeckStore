import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck.model';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [DeckService]
})
export class AdminComponent implements OnInit {

  constructor(private deckService: DeckService) { }

  ngOnInit() {
  }
  submitForm(category: string,name: string,cardone: string,imageone: string,cardtwo: string,imagetwo: string,cardthree: string,imagethree: string,cardfour: string,imagefour: string,cardfive: string,imagefive: string,cardsix: string,imagesix: string,cardseven: string,imageseven: string,cardeight: string,imageeight: string,){
    var newDeck: Deck = new Deck(category, name,
      cardone,
      imageone,
      cardtwo,
      imagetwo,
      cardthree,
      imagethree,
      cardfour,
      imagefour,
      cardfive,
      imagefive,
      cardsix,
      imagesix,
      cardseven,
      imageseven,
      cardeight,
      imageeight
    );
    this.deckService.addDeck(newDeck);
}

}
