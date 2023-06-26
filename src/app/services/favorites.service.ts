import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favoritesKey = 'favorites';

  addToFavorites(location: string): void {
    const favorites = this.getFavorites();
    favorites.push(location);
    this.saveFavorites(favorites);
  }

  getFavorites(): string[] {
    const favoritesString = localStorage.getItem(this.favoritesKey);
    return favoritesString ? JSON.parse(favoritesString) : [];
  }

  removeFavorite(location: string): void {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(location);
    if (index !== -1) {
      favorites.splice(index, 1);
      this.saveFavorites(favorites);
    }
  }

  private saveFavorites(favorites: string[]): void {
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }
  
}
