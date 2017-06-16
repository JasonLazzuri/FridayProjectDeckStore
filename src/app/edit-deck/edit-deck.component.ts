import { Component, OnInit, Input } from '@angular/core';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-edit-deck',
  templateUrl: './edit-deck.component.html',
  styleUrls: ['./edit-deck.component.css'],
  providers: [DeckService]

})
export class EditDeckComponent implements OnInit {
  @Input() selectedDeck;


  constructor(private DeckService: DeckService) { }

  ngOnInit() {
  }

  beginUpdatingDeck(deckToUpdate){
    this.DeckService.updateDeck(deckToUpdate);
  }

  beginDeletingDeck(DeckToDelete){
    if(confirm("Are you sure you want to delete this deck from the inventory?")){
      this.DeckService.deleteDeck(DeckToDelete);
    }
  }

}
