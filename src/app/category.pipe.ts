import { Pipe, PipeTransform } from '@angular/core';
import { Deck } from './deck.model';


@Pipe({
  name: 'category',
  pure: false
})

export class CategoryPipe implements PipeTransform {

  transform(input: Deck[], category) {
    var output: Deck[] = [];
    if (category === "Siege") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Siege") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (category === "Cycle") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Cycle") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
