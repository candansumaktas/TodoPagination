import { Component, OnInit } from '@angular/core';
import { Album } from '../album/album';
import { Favorite } from '../favorites/favorite';
import { FavoriteService } from '../favorites/favorite.service';

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.css']
})
export class FavoriteDetailComponent implements OnInit {

  favorites:Favorite[]=[]
  constructor(private favoriteService:FavoriteService) { }

  ngOnInit(): void {
    this.favorites=this.favoriteService.getFavorite()
  }

  removeFromFavorite(album:Album){
    this.favoriteService.removeFromFavorite(album)}
  

}
