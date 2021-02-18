import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Blast' },
      { id: 2, name: 'Tornado of Terror' },
      { id: 3, name: 'Silver Fang' },
      { id: 4, name: 'Atomic Samurai' },
      { id: 5, name: 'Child Emperor' },
      { id: 6, name: 'Metal Knight' },
      { id: 7, name: 'King' },
      { id: 8, name: 'Zombiman' },
      { id: 9, name: 'Drive Knight' },
      { id: 10, name: 'Pig God' },
      { id: 11, name: 'Superalloy Darkshine' },
      { id: 12, name: 'Watchdog Man' },
      { id: 13, name: 'Flashy Flash' },
      { id: 14, name: 'Demon Cyborg' },
      { id: 15, name: 'Metal Bat' },
      { id: 16, name: 'Tanktop Master' },
      { id: 17, name: 'Puri-Puri Prisoner' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
