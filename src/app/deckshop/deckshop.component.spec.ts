import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckshopComponent } from './deckshop.component';

describe('DeckshopComponent', () => {
  let component: DeckshopComponent;
  let fixture: ComponentFixture<DeckshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
