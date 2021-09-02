import { Component, OnInit } from '@angular/core';
import { Favorite } from './favorite';
import { FavoriteService } from './favorite.service';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../album/album';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoriteComponent implements OnInit {


  favorites:Favorite[]=[]

  constructor(private favoriteService:FavoriteService,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.favorites=this.favoriteService.getFavorite();
  }

  removeFromFavorite(album:Album){     
    this.favoriteService.removeFromFavorite(album)     
    this.toastrService.error("Silindi",album.title)   }
}
