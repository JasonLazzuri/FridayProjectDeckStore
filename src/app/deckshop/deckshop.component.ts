import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deck } from '../deck.model';


@Component({
  selector: 'app-deckshop',
  templateUrl: './deckshop.component.html',
  styleUrls: ['./deckshop.component.css']
})

export class DeckshopComponent implements OnInit {
  decks: Deck[] =[
    new Deck ("Splash Deck","NW Exe Graveyard cycle","Executioner","http://vignette3.wikia.nocookie.net/clashroyale/images/d/da/ExecutionerCard.png/revision/latest?cb=20161215003040","Graveyard","http://vignette1.wikia.nocookie.net/clashroyale/images/4/42/GraveyardCard.png/revision/latest?cb=20161014155821","Ice Golem","http://vignette2.wikia.nocookie.net/clashroyale/images/5/5f/IceGolemCard.png/revision/latest?cb=20160930145935","Ice Spirit","http://vignette1.wikia.nocookie.net/clashroyale/images/2/2c/IceSpiritCard.png/revision/latest?cb=20160702201134","Night Witch","http://vignette1.wikia.nocookie.net/clashroyale/images/2/2b/Night_Witch_%281%29.png/revision/latest?cb=20170313085517","Poison","http://clashroyale.wiki/wp-content/uploads/2016/05/PoisonCard.png","Skellies","https://vignette3.wikia.nocookie.net/clashroyale/images/f/f0/SkeletonsCard.png/revision/latest/scale-to-width-down/200?cb=20160702201245","Tornado","https://vignette4.wikia.nocookie.net/clashroyale/images/3/37/TornadoCard.png/revision/latest?cb=20161031190737",1)
  ];

  constructor(private router: Router) { }

  goToDetailPage(clickedDeck: Deck) {
    this.router.navigate(['deckshop', clickedDeck.id]);
  };

  ngOnInit() {
  }

}
