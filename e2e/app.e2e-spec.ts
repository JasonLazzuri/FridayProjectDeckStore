import { DeckshopPage } from './app.po';

describe('deckshop App', () => {
  let page: DeckshopPage;

  beforeEach(() => {
    page = new DeckshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
