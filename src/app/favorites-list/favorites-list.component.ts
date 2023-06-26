import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  favorites: string[] = [];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }
}

